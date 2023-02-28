const express=require('express');
const employeeSchema=require('../models/employee');

const createEmployee=async(req,res)=>{
    const employee=employeeSchema(req.body);
    const saveEmployee=await employee.save();
    res.status(200).json({message:"Empleado registrado!"})
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