const {json}=require('express');
const {database}=require('../utils/database.js');

const getEmployees=async(req,res)=>{
    const [result]=await database.query('SELECT * from employee')
    res.json(result);
};
const createEmployee=async(req,res)=>{
    const {name, lastname, username, password, phone_number, email}=req.body;
    const [rows]=await database.query(
        'INSERT INTO employee (name, lastname, username,password, role,phone_number,email) VALUES (?,?,?,?,?,?,?);',
        [name, lastname, username,password,'employee',phone_number,email]
        );
    const message="Empleado registrado exitosamente!";
    res.json(message);
}

const updateEmployee=async(req,res)=>{
    const {id,name, lastname, phone_number, email}=req.body;
    const [result]=await database.query(
        'UPDATE employee SET name=?, lastname=?, phone_number=?, email=? WHERE id=?;',
        [name,lastname,phone_number,email, id]
    );
    if(result.affectedRows===0){
        res.status(404), json({message:"Empleado no encontrado"});
    }else{
        const message="Actualizacion exitosa!";
        res.json({message});
    }
}

const setPassword=async(req, res)=>{
    const {id,password}=req.body;
    const [result]=await database.query(
        'UPDATE employee SET password=? WHERE id=?',
        [password,id]
    );
    if(result.affectedRows===0){
        res.status(404), json({message:"Empleado no encontrado"});
    }else{
        const message="Contrasenia actualizada existosamente!";
        res.json({message});
    }
}
module.exports={
    getEmployees,
    createEmployee,
    updateEmployee,
    setPassword,
}