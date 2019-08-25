var mongoose = require('mongoose');
var schema  = mongoose.Schema;
var schemaTypes = mongoose.Schema.Types;

var pdctschema = new schema({
    product_id:{type:String,required:true},
    product_title:{type:String,required:true},
    product_image:{type:String,required:true}    
});

var pdctmodel = mongoose.model("product",pdctschema,"productsnew");
module.exports = pdctmodel;