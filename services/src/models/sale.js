const {Schema, model,default:mongoose}=require('mongoose');
const saleSchema= new Schema(
    {
        "movie":[{ref:"movie",type:mongoose.Schema.Types.ObjectId}],
        "customer":{ref:"Customer",type:mongoose.Schema.Types.ObjectId},
        "saleDate":{type:Date},
        "days":{type:Number}
    },
    {
        timestamps:true,
        versioKey:false
    }
)

module.exports=mongoose.model("Sale",saleSchema);