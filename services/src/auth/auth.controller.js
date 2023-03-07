const Employee= require("../models/employee");
const jwt=require('jsonwebtoken');
const config=require('../config');
const Role=require('../models/Role');

const signUp=async(req,res)=>{
    const {_id,username,email,pass,roles}=req.body;
    //const empFound=Employee.find({email});
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

const signIn=async(req,res)=>{
    const emp=await Employee.findOne({email:req.body.email}).populate("roles");
    if(!emp) return res.status(400).json({message:"Employee not found"});
    const matchPassword=await Employee.comparePassword(req.body.password,emp.password);

    if(!matchPassword) return res.status(401).json({token:null, message:"Invalid password"});
    const token=jwt.sign({id:emp._id}, config.SECRET,{ expiresIn:86400});
    res.json({token});
}

module.exports={
    signUp,
    signIn,
}