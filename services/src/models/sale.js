const {Schema, model,default:mongoose}=require('mongoose');
const saleSchema= new Schema(
    {
        "productType":{type:String},
        "product":[{ref:"Sale",type:mongoose.Schema.Types.ObjectId},{ref:"Game",type:mongoose.Schema.Types.ObjectId}],
        "customer":{ref:"Customer",type:mongoose.Schema.Types.ObjectId},
        "cuantity":{type:Number},
        "saleDate":{type:Date},
    },
    {
        timestamps:true,
        versioKey:false
    }
)

module.exports=mongoose.model("Sale",saleSchema);