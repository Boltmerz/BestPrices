import mongoose from 'mongoose';

var categorySchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    Description: String,
});
export const Category = mongoose.model("Category",categorySchema);
