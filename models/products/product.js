var mongoose = require("mongoose");
var random = require("mongoose-random");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://tarek12:tarek1@ds145183.mlab.com:45183/almazon");
var productSchema = new Schema({
	productTitle: {type:String, required: true},
	productDescription: {type: String, required: true},
	productCategoryName: {type: String, required: true},
	productBrandName: {type: String, required: true},
	productStandard: {type: String, required: true},
	productGram: {type: String, required: true},
	productNumber: {type: String, required: true},
	productAmount: {type: String, required: true},
	productDescount: {type: String},
	productDescountDegree: {type: String},
	productImage1: {type: String, required: true},
	productImage2: {type: String},
	productImage3: {type: String},
	productPuplisher: {type:String, required: true},
	productDate: {type: Date, required: true},
	productPrice: {type: String, required: true},
	productCount: {type: Number, required: true}


});
var Product = module.exports = mongoose.model("Product", productSchema, "products");
