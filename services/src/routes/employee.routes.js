const express=require("express");
const { getEmployees, createEmployee, getById, update, changePassword, deleteEmployee } = require('../controllers/employee.controller');
const router=express.Router();
const {verifyToken}=require('../middlewares');


router.get("/employee/",getEmployees);
router.get("/employee/:id/",getById);
router.post("/employee/",createEmployee);
router.put("/employee/",update);
router.put("/employee/password/",changePassword);
router.delete("/employee/:id/",deleteEmployee);

module.exports=router;
//Get
//Consultar todos: http://localhost:3000/api/employee

//Post
//Crear nuevo: http://localhost:3000/api/employee

//Put
//Actualizar datos personales: http://localhost:3000/api/employee
//Actualizar contraseña: http://localhost:3000/api/employee/password