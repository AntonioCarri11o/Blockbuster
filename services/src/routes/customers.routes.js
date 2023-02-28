const express=require("express");
const {getCustomers,getById,createCustomer,updateCustomer}=require('../controllers/customer.controller.js');
const router=express.Router();

//middlewares

//Crear cliente
router.post('/customer/',createCustomer);
//Listar clientes
router.get("/customer/",getCustomers);
//Consultar cliente por id
router.get("/customer/:id",getById);
//Actualizar clieente
router.put("/customer/",updateCustomer);
//Exportar rutas
module.exports=router;