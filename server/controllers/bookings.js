import express from "express";
import bookingModel from "../models/Booking";
const Router = express.Router();

//book
  Router.post(
    "/booking", async (req, res, next) => {
      try {
        console.log(req.body)
  
        //setting role
        req.body.role = "book";

        
        let place = new bookingModel(req.body);
        let { emailVerifyToken } = await place.save();
        req.body.emailVerifyToken = emailVerifyToken;
        res.status(200).json({success : true,msg : "booked successfully"})
        next();
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
    },
    
  );


  // Router.get('/bookings', async (req,res) => {
    // take data frm DB n upload
   
  // });

  export default Router;