import mongoose from "mongoose";

const cardSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    address:{type:String, required:true},
    contact:{type:String, required:true},
    website:{type:String, required:true},
})

export const Card=mongoose.model("card", cardSchema);