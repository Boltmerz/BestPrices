import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: String,
   DOB: Date,
   Phone: String
});
export const User = mongoose.model("User",userSchema);