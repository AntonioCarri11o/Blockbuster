const express = require('express');
const employees=require('./routes/employee.routes.js');
const customers=require('./routes/customers.routes.js');
const auth=require('./auth/auth.routes');
const pkg=require('../package.json');
const morgan=require('morgan');
const mongoose=require("mongoose");
const {createRoles} =require("./libs/initialSetup");


require ("dotenv").config();
//const cors = require('cors');

const app = express(); // < -- usermos el servicio de app

/*
//Middlewares
app.use(express.json()); //Indicamos que nuestros metodos son Json
app.use(express.urlencoded({extended:false})); //Esto es para los input de nuestros formularios


//Rutas para nuestro servicio
app.use('/api',employees.routerEmployee);
app.use('/api',auth.authRouter);

//Arranque de nuestro Server
*/
//Settings
app.set('port',process.env.PORT || 3000); //El puerto que estaremos usando en todo momento 
app.set('json spaces',2) //Espacios para nuestro json *Es irrelente pero lo hace estetico*
app.set('pkg',pkg)
app.get("/",(req,res)=>{
    res.send("Welcome to my API")
});
//Middlewares
app.use(express.json());
app.use('/api',customers);
app.use('/api',employees);
app.use('/api',auth);
//mongodb connection
app.listen(app.get('port'), () =>{
    mongoose.connect(process.env.MONGODBURI).then(()=>{console.log("Conected to MongoDB");createRoles();})
    .catch((error)=>console.log(error));
    console.log(`Server running in port: ${app.get('port')}`);
    //createRoles();
});
