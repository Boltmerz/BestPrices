import mongoose from 'mongoose';

var sellerSchema = new mongoose.Schema({
    name: String,
    location: String,
    Description: String,
});
export const Seller = mongoose.model("Seller",sellerSchema);