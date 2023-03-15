const express= require('express');
const saleSchema=require('../models/sale');

const newSale=async(req, res)=>{
    const sale= saleSchema (req.body);
    await sale.save();
    res.status(200).json({sale,message:"Venta reliazadacon éxito"});
}

const getSales= async(req,res)=>{
    const salesList=await saleSchema.find();
    res.status(200).json(salesList);
}

const getById= async(req,res)=>{
    const sale=await saleSchema.findById(req.params.id);
    res.status(200).json(sale);
}

const getByCustomer=async(req,res)=>{
    const sale=await saleSchema.aggregate([{$match:{"customer.name":{$eq:req.body.idCustomer}}}])
    res.status(200).json(sale);
}
const update=async(req,res)=>{
    const sale=await saleSchema.findByIdAndUpdate(req.body._id,req.body,{new:true});
}

module.exports={
    newSale,
    getSales,
    getById,
    getByCustomer,
    update
}