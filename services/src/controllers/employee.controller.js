const express=require('express');
const employeeSchema=require('../models/employee');
const Role =require('../models/Role')

const createEmployee=async(req,res)=>{
    const employee=employeeSchema(req.body);
    console.log(employee.email);
    const searchEmployee=await 
    employeeSchema.aggregate([{$match:{email:{$eq:`${employee.email}`}}}]);
    const [des]=searchEmployee;
    console.log(des)
    if(des){
        res.status(200).json(searchEmployee)  
        console.log(searchEmployee);
        res.status({message:"Error empleado ya registrado!"});
    }else{
        employee.password=await employeeSchema.encryptPassword(employee.password);
        const role=await Role.findOne({name:"employee"})
        employee.roles=[role._id];
        console.log(employee)
        const saveEmployee=await employee.save();
        res.status(200).json(saveEmployee)    
    }

}
const getEmployees=async(req,res)=>{
    const listEmployees=await employeeSchema.find();
    res.json(listEmployees);
}
const getById=async(req,res)=>{
    const employee=await employeeSchema.findById(req.params.id);
    res.json(employee);
}
const update=async(req,res)=>{
    const employee=employeeSchema(req.body);
    const update=await employeeSchema.findByIdAndUpdate(req.body._id,employee,{new:true});
    res.status(200).json({message:"Empleado Actualizado!"})
}
const changePassword=async(req,res)=>{
    let {id,password}=req.body;
    password=await employeeSchema.encryptPassword(password);
    await employeeSchema.update({"_id":`${id}`},{"password":`${password}`});
    res.status(200).json({message:"Contraseña Actualizada!"});
}
const deleteEmployee=async(req,res)=>{
    let {id}=req.params;
    await employeeSchema.remove({_id:`${id}`});
    res.status(200).json({message:"Empleado eliminado"});
}
module.exports={
    getEmployees,
    createEmployee,
    getById,
    update,
    changePassword,
    deleteEmployee
    //updateEmployee,
    //setPassword,
}