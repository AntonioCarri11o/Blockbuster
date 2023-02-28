const express=require('express');
const {signIn,signUp} =require("./auth.controller");
const router=express.Router();

router.post('/signUp/',signUp);
router.post('/signIn/',signIn);
module.exports=router;