import mongoose from 'mongoose';

var sellerProductSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    product:{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    seller:{ type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true },
    price: mongoose.Schema.Types.Decimal128
});
export const SellerProduct = mongoose.model("SellerProduct",sellerProductSchema);