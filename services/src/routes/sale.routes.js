const express= require("express");
const {newSale,getSales,getById,getByCustomer,update}= require('../controllers/sale.controller.js')
const {verifyToken}= require('../middlewares/authJwt.js')
const router=express.Router();

router.post('/sale/',newSale);
router.get('/sale/',getSales);
router.get('/sale/:id/',getById);
router.post('/sale/bycustomer/',getByCustomer);
router.put('/sale/',update);

module.exports=router;