const {query}=require('../utils/database.js');
const {generateToken}=require('../config/jwt.js');
const {response}=require('express');

const login=async(user,res=response)=>{
    if(!user.username || !user.password) throw Error('Missing fields');
    const sql= 'SELECT * FROM employee WHERE username=? and password=?;'
    const existEmployee=await query(sql,[user.username, user.password]);
    if(existEmployee[0]==undefined){
        throw Error('Username or password mismatch');
    }else{
        console.log('generando token...')
        return generateToken({
            id:existEmployee[0].id,
            username:user.username,
            role:existEmployee[0].role,
            isLogged:true,
        });
        console.log(role);
    }
};
module.exports={
    login
}