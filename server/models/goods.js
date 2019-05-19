var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "productId":  String,
    "productName": String,
    "salePrice":   Number,
    "productNum": Number,
    "checked": Number,
    "productImage": String
});

module.exports = mongoose.model('Good', productSchema);