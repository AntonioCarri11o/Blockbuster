const {mongoose,Schema}=require("mongoose");
const bcrypt=require('bcryptjs');

const employeeSchema=mongoose.Schema(
    {
    "name":{type:String},
    "lastname":{type:String},
    "email":{type:String},
    "username":{type:String},
    "password":{type:String},
    "age":{type:Number},
    "phone_number":{type:String},
    "roles":[{ref:"Role",type:mongoose.Schema.Types.ObjectId}]
    },
    {
        timestamps:true,
        versioKey:false
    }
);

employeeSchema.statics.encryptPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

employeeSchema.statics.comparePassword=async(password,receivedPassword)=>{
    return await bcrypt.compare(password,receivedPassword)
}
module.exports=mongoose.model("Employee",employeeSchema);