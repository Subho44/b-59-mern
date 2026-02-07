const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true},
    description:{type:String, required:true},

});
module.exports = mongoose.model("Product-b59",productschema);
