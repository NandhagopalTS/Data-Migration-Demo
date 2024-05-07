import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number
})
const userModel= mongoose.model('User',userSchema)
export default userModel