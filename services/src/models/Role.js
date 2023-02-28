const {Schema,model, default: mongoose} =require('mongoose');
const roleSchema=new Schema(
    {name:String},
    {versionKey:false}
);

module.exports=mongoose.model("Role",roleSchema);