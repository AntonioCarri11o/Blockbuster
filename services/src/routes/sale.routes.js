const express= require("express");
const {newSale,getSales,getById,getByCustomer,update}= require('../controllers/sale.controller.js')
const {verifyToken}= require('../middlewares/authJwt.js')
const router=express.Router();

router.post('/sale/',verifyToken,newSale);
router.get('/sale/',verifyToken,getSales);
router.get('/sale/:id/',verifyToken,getById);
router.post('/sale/bycustomer/',verifyToken,getByCustomer);
router.put('/sale/',verifyToken,update);

module.exports=router;