const mongoose=require("mongoose");


const customerSchema=mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "lastname":{
        type:String,
        required:true
    },
    "address":{
        type:String,
        required:true,
    },
    "phone_number":{
        type:String,
        required:true
    }

});
//const Model =mongoose.model('Blockbuster',customerSchema)
module.exports=mongoose.model('Customer',customerSchema);