const Router = require('express');
const{getEmployees, createEmployee}=require('../controllers/employee.controller.js');
const routerEmployee=Router();


routerEmployee.get('/employee/',getEmployees)
routerEmployee.post('/employee/',createEmployee)
module.exports={
    routerEmployee
}

//Get
//Consultar todos: http://localhost:3000/api/employee

//Post
//Crear nuevo: http://localhost:3000/api/employee