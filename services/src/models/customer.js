const mongoose=require("mongoose");


const customerSchema=mongoose.Schema({
    "_id":{
        type:Number,
        required:true,
    },
    "name":{
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