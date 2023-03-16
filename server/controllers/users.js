import tokenGenerator from "../utils/tokenGenerator.js";
import express from "express";
import bcrypt from "bcrypt";
import { registerValidations, errorMiddleware,loginValidations } from "../middlewares/validations/index.js"
import userModel from "../models/User.js";

const Router = express.Router();

Router.post(
  "/register",
  registerValidations(),
  errorMiddleware,
  async (req, res, next) => {
    try {
      console.log(req.body)
      //finding the user
      let userFound = await userModel.findOne({ email: req.body.email });

      //if user already exist break the flow
      if (userFound) {
        return res
          .status(409)
          .json({ error: "Account already exists.", registered: false });
      }

      //hashing the password
      req.body.password = await bcrypt.hash(req.body.password, 12);

      let user = new userModel(req.body);

      //emailToken is generated automatically in user schema.
      let { emailVerifyToken } = await user.save();
      req.body.emailVerifyToken = emailVerifyToken;

      
      res.status(200).json({ success: true, msg: "registerd successfully" })
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, msg: "server error" });
    }
  },
  // sendMail
);

Router.post("/login", loginValidations(), errorMiddleware,
  async (req, res) => {
    try {
      //Checking if user exists.
      let userFound = await userModel.findOne({ email: req.body.email });
      if (!userFound)
        return res
          .status(401)
          .json({ access: false, error: "Account does not exits." });

      //Checking if password matches
      let matchedPassword = await bcrypt.compare(
        req.body.password,
        userFound.password
      );
      if (!matchedPassword)
        return res
          .status(401)
          .json({ access: false, error: "Unauthorized Access." });

      //Generating jwt Token
      const token = tokenGenerator({ id: userFound._id, role: "user" }, "1d");
      res.status(200).json({ access: true, msg: "Login Successfully.", token });
    } catch (error) {
      console.log(error)
      res.status(500).json({ access: false, error: "Internal Server Error." });
    }
  }
);

export default Router