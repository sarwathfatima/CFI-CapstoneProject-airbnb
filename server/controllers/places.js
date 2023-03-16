import express from "express";
import placeModel from "../models/Place.js";
import bookingModel from "../models/Booking.js";
import imageDownloader from 'image-downloader';
import upload from "../middlewares/upload.js";
import sendEmail from "../utils/mail.js";
const router = express.Router();

// add place
  router.post(
    "/place",upload.single("file"), async (req, res, next) => {
      try {
        // console.log(req.body)
  
        //setting role
        req.body.role = "place";
        let place = new placeModel(req.body);
        let { emailVerifyToken } = await place.save();
        req.body.emailVerifyToken = emailVerifyToken;
        res.status(200).json({success : true,msg : "place successfully added"})
        next();
      } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
    },
    
  );
  // display all places
  router.get('/places', async (req,res) => {
    
    res.json( await placeModel.find() );
  });

  router.get('/place/:id',async (req,res) => {
    const {id} = req.params
    res.json(await placeModel.findById(id))
  })
  
/*
let formData = new FormData(e.target);

axios.post("/api/place", formData)

*/

router.post('/upload-by-link', async (req,res) => {
  const {link} = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  await imageDownloader.image({
    url: link,
    dest: '/tmp/' +newName,
  });
 
});

router.post(
  "/booking", async (req, res, next) => {
    try {
      console.log(req.body)

      //setting role
      req.body.role = "book";
      let place = new bookingModel(req.body);
      let { emailVerifyToken } = await place.save();
      req.body.emailVerifyToken = emailVerifyToken;
      res.status(200).json({success : true,msg : "booked successfully"})
      sendEmail();
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  
);

router.get('/bookings', async (req,res) => {
    
  res.json( await bookingModel.find() );
});

  export default router;