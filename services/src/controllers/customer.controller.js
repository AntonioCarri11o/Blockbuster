const express=require("express");
const customerSchema= require("../models/customer");

//const customer = customerSchema(req.body);
//customer.save().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
const createCustomer=async(req,res)=>{
    const customer=customerSchema(req.body);
    const saveCustomer=await customer.save();
    res.status(200).json({message:"Cliente insertado!"});
}
const getCustomers= async(req, res)=>{
    const result=await customerSchema.find();
    res.json(result);
}
const getById=async(req,res)=>{
    const customer=await customerSchema.findById(req.params.id);
    res.json(customer);
}
const updateCustomer=async(req,res)=>{
    const customer=await customerSchema.findByIdAndUpdate(req.body._id,req.body,{new:true});
    res.status(200).json({message:"Cliente actualizado!"});
}
module.exports={
    getCustomers,
    createCustomer,
    updateCustomer,
    getById,
}