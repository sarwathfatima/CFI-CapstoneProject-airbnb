import { body, validationResult } from "express-validator";

const registerValidations = () => {
  return [
    body("fullname", "A fullname is required").notEmpty(),
    body("email", "A valid email is required").isEmail(),
    body("username", "Username must be at least 5 characters long").notEmpty().isLength({ min: 5 }),
    body("password","Password must contain at least 1 number, Uppercase, Lowercase and Special character, must be at least 8 characters long").isStrongPassword(),
  ];
};



const loginValidations = () =>{
  return[
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must contain at least 5 characters").isLength({min: 5})
  ]
}
const errorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

export { registerValidations, errorMiddleware, loginValidations};