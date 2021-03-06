const {Schema, model}= require('mongoose')

const productSchema= new Schema({
    name:{type:String, require:true, trim:true, max:25},
    description:{type:String, require:true, trim:true, max:100},
    code:{type:String, require:true, trim:true, max:20},
    urlImage:{type:String, require:true, trim:true, max:50},
    price:{type:Number, require:true, trim:true, max:1000000},
    stock:{type:Number, require:true, trim:true, max:20},
    timestamp:{type:String, require:true, trim:true, max:10}
})

module.exports = model("Product", productSchema)