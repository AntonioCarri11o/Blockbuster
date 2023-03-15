const express=require('express');
const employeeSchema=require('../models/employee');
const Role =require('../models/Role')

const createEmployee=async(req,res)=>{
    const employee=employeeSchema(req.body);
    console.log(employee.email);
    const searchEmployee=await 
    employeeSchema.find();
    console.log(searchEmployee)
    if(searchEmployee){
        res.status(200).json(searchEmployee)  
        console.log(searchEmployee);
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
    const employee=await employeeSchema.findByIdAndUpdate(req.body._id,req.body,{new:true});
    res.status(200).json({message:"Empleado Actualizado!"})
}

module.exports={
    getEmployees,
    createEmployee,
    getById,
    update
    //updateEmployee,
    //setPassword,
}