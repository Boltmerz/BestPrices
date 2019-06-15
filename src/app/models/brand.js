import mongoose from 'mongoose';

var brandSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

export const Brand = mongoose.model("Brand",brandSchema);