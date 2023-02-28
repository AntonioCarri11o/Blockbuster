const Employee= require("../models/employee");
const jwt=require('jsonwebtoken');
const config=require('../config');
const Role=require('../models/Role')

const signUp=async(req,res)=>{
    const {_id,username,email,pass,roles}=req.body;
    const empFound=Employee.find({email});
    const newEmployee= new Employee({
        _id,
        username,
        email,
        password:await Employee.encryptPassword(pass)    
    });
    if(roles){
        const foundRoles=await Role.find({name:{$in:roles[0]}})
        newEmployee.roles=foundRoles.map(role=>role._id)
    }else{
        const role=await Role.findOne({name:"employee"})
        newEmployee.roles=[role._id];
    }
    const savedEmployee=await newEmployee.save();
    const token=jwt.sign({id:savedEmployee._id},config.SECRET,{expiresIn:86400})
    res.json({token});
}

const signIn=(req,res)=>{
    res.json('signIn');
}

module.exports={
    signUp,
    signIn,
}