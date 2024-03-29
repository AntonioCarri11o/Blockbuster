const express= require('express');
const saleSchema=require('../models/sale');
const customerShema=require('../models/customer');

const newSale=async(req, res)=>{
    const customer=customerShema(req.body.customer);
    const response=await customer.save();
    req.body.customer._id=response._id;
    sale=saleSchema(req.body);
    const now=Date.now();
    const today=new Date(now);
    sale.saleDate=today;
    const saveSale=await sale.save();
    res.status(200).json({message:"Venta reliazada con éxito"});
}

const getSales= async(req,res)=>{
    //const salesList=await saleSchema.find();
    const salesList=await saleSchema.aggregate([
        {$lookup:{from:"games",localField:"product",foreignField:"_id",as:"game"}},
        {$lookup:{from:"movies",localField:"product",foreignField:"_id",as:"movie"}},
        {$lookup:{from:"customers",localField:"customer",foreignField:"_id", as:"customer"}}
    ])
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

/* CONSULTAR CON EMBEBIDOS
db.sales.aggregate([
  {
  $lookup:{
    from:"games",
    localField:"product",
    foreignField:"_id",
    as:"product"
  }
},
{
  $lookup:{
    from:"customers",
    localField:"customer",
    foreignField:"_id",
    as:"customer"
  }
}
]);
*/