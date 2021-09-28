const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

// const User = require('../models/user');

// find a user by id
router.get("/:id", usersControllers.getUserById);

// async (req, res, next) => {
//   let data = await User.find({});
//   console.info(`records retrieved from mongoose:`, data?.length)
//   res.send(data);
// });

// create a user
router.post(
  "/signup",
  [
    check("username").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.signup
);
router.post('/login', usersControllers.login);
module.exports = router;
