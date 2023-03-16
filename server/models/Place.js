import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({

  title: {
        type:String,
        required:true,
        maxlength:50
    },
  address: { 
    type:String,
    required:true,
    maxlength:50,
},
  photos: {
    type:[String]
  },
  description: {
    type:String,
        required:true,
        maxlength:500
  },
  perks:{
    type:[String]
  },
  extraInfo: {
    type:String,
    required:true,
    maxlength:500
},
  maxGuests: {
    type:Number,
    required:true
  },
  price: {
    type:Number,
    required:true
  },
})

let placeModel = mongoose.model("Place", placeSchema, "place");
export default placeModel;