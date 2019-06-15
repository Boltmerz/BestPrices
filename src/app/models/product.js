import mongoose from 'mongoose';

var productSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name: String,
    barcode: String,
    Description: String,
    image: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
    price: [{seller: {type: mongoose.Schema.Types.ObjectId,ref: "Seller"},price:mongoose.Schema.Types.Decimal128}]
});
export const Product = mongoose.model("Product",productSchema);