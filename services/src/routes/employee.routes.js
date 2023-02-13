const Router = require('express');
const{getEmployees, createEmployee, updateEmployee, setPassword}=require('../controllers/employee.controller.js');
const routerEmployee=Router();


routerEmployee.get('/employee/',getEmployees)
routerEmployee.post('/employee/',createEmployee)
routerEmployee.put('/employee/',updateEmployee)
routerEmployee.put('/employee/password/',setPassword)
module.exports={
    routerEmployee
}

//Get
//Consultar todos: http://localhost:3000/api/employee

//Post
//Crear nuevo: http://localhost:3000/api/employee

//Put
//Actualizar datos personales: http://localhost:3000/api/employee
//Actualizar contraseña: http://localhost:3000/api/employee/password