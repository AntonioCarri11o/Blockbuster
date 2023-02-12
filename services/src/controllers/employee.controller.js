const {json}=require('express');
const {database}=require('../utils/database.js');

const getEmployees=async(req,res)=>{
    const [result]=await database.query('SELECT * from employee')
    res.json(result);
};
const createEmployee=async(req,res)=>{
    const {name, lastname, username, password, phone_number, email}=req.body;
    const [rows]=await database.query(
        'INSERT INTO employee (name, lastname, username,password, role,phone_number,email) VALUES (?,?,?,?,?,?,?)',
        [name, lastname, username,password,'employee',phone_number,email]
        );
    const message="Empleado regisrado de forma existosa!";
    res.json(message);
}

module.exports={
    getEmployees,
    createEmployee,
}