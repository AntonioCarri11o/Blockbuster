const {Router}=require('express');
const { login } = require('../auth/auth.gateway.js');
const {response}=require('express');

const signin=async(req, res=response)=>{
    try{
        const {username, password}=req.body;
        const token = await login({ username, password });
        res.status(200).json({token});
    }catch(error){
        console.log(error);
        res.status(400).json({message:"ha ocurrido un error"})
    }
    
};

const authRouter=Router();
authRouter.post(`/login`, signin);

module.exports={
    authRouter
}