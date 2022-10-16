const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator"); //for validating email
const bcrypt = require('bcryptjs'); //for hashing password
const jwt = require('jsonwebtoken'); //to create a secure connection b/w user and srver for authnicating user for login

JWT_SECRET= 'shhhhh'

//Cretae a user using: POST "/api/auth/createuser " No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid password").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether user email already exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with the same email already exists" });
      }
      
      const salt= await bcrypt.genSalt(10)
      const secPass= await bcrypt.hash( req.body.password, salt)

      // create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data={
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET)
      console.log(authToken)

      res.json({authToken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
