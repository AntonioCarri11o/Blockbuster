const {mongoose,Schema}= require('mongoose');

const movieSchema=mongoose.Schema(
    {
        "tittle":{type:String},
        "duration":{type:String},
        "price":{type:Number},
        "stock":{type:Number},
        "producer":{type:String},
        "languages":[],
        "status":{type:String}
    }
);

module.exports=mongoose.model("Movie",movieSchema);