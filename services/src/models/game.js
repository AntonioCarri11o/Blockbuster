const {mongoose, Schema}=require('mongoose');
const {appConfig}=require('../config')

const gameSchema=mongoose.Schema(
    {
        "tittle":{type:String},
        "price":{type:Number},
        "stock":{type:Number},
        "rate":{type:Number},
        "description":{type:String},
        "languages":[],
        "genre":{type:String},
        "status":{type:String},
        "studio":{type:String},
        //"filename":{type:String}
    }
)
gameSchema.methods.setImgUrl=function setImgUrl(filename){
    const {host,port}=appConfig;
    this.setImgUrl=`${host}:${port}/public/${filename}`
}

module.exports=mongoose.model("Game",gameSchema);