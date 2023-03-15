const express=require("express");
const {getCustomers,getById,createCustomer,updateCustomer}=require('../controllers/customer.controller.js');
const { verifyToken } = require("../middlewares/authJwt.js");
const router=express.Router();

//middlewares

//Crear cliente
router.post('/customer/',verifyToken,createCustomer);
//Listar clientes
router.get("/customer/",verifyToken,getCustomers);
//Consultar cliente por id
router.get("/customer/:id",verifyToken,getById);
//Actualizar clieente
router.put("/customer/",verifyToken,updateCustomer);
//Exportar rutas
module.exports=router;