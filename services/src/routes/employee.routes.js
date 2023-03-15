const express=require("express");
const { getEmployees, createEmployee, getById, update } = require('../controllers/employee.controller');
const router=express.Router();
const {verifyToken}=require('../middlewares');


router.get("/employee/",verifyToken,getEmployees);
router.get("/employee/:id/",verifyToken,getById);
router.post("/employee/",verifyToken,createEmployee);
router.put("/employee/",verifyToken,update);

module.exports=router;
//Get
//Consultar todos: http://localhost:3000/api/employee

//Post
//Crear nuevo: http://localhost:3000/api/employee

//Put
//Actualizar datos personales: http://localhost:3000/api/employee
//Actualizar contraseña: http://localhost:3000/api/employee/password