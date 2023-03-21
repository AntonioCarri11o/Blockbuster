const {mongoose,Schema}= require('mongoose');
const {appConfig} =require('../config')
const movieSchema=mongoose.Schema(
    {
        "tittle":{type:String},
        "duration":{type:String},
        "price":{type:Number},
        "stock":{type:Number},
        "producer":{type:String},
        "languages":[],
        "status":{type:String},
        "genre":[],
        //"filename":{type:String}
    }
);

movieSchema.methods.setImgUrl=function setImgUrl(filename){
    const {host, port}=appConfig;
    this.setImgUrl=`${host}:${port}/public/${filename} `
}

module.exports=mongoose.model("Movie",movieSchema);