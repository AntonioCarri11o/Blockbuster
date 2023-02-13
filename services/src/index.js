const express = require('express');
const employees=require('./routes/employee.routes.js');
const auth=require('./auth/auth.controller.js');
//const cors = require('cors');

const app = express(); // < -- usermos el servicio de app

//Middlewares
app.use(express.json()); //Indicamos que nuestros metodos son Json
app.use(express.urlencoded({extended:false})); //Esto es para los input de nuestros formularios

//Settings
app.set('port',process.env.PORT || 3000); //El puerto que estaremos usando en todo momento 
app.set('json spaces',2) //Espacios para nuestro json *Es irrelente pero lo hace estetico*

//Rutas para nuestro servicio
app.use('/api',employees.routerEmployee);
app.use('/api',auth.authRouter);

//Arranque de nuestro Server
app.listen(app.get('port'), () =>{
    console.log(`Server running in port: ${app.get('port')}`);
});