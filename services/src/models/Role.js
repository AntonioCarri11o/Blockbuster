const {Schema,model, default: mongoose} =require('mongoose');
const roleSchema=new Schema(
    {name:String},
    {description:String},
    {status:Number},
    {versionKey:false}
);

module.exports=mongoose.model("Role",roleSchema);