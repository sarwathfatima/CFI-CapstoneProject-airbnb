import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   fullname:{
        type:String,
        required:true,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        maxlength:50,
        unique:true
    },
    username:{
        type:String,
        required:true,
        maxlength:30
    },
    password:{
        type:String,
        required:true
    },
})

let userModel = mongoose.model("User", userSchema, "user");
export default userModel;