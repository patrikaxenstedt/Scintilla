const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const passport = require("passport");
const validator = require("validator");
const isEmpty = require("../../utils/isEmpty");
const key = require("../../config/keys");

// bring in user model
require("../../models/User");
const User = mongoose.model("users");

// POST | api/auth/register
// register process
router.post("/register", (req, res, next) => {
  const { errors, isValid } = validateRegister(req.body);

  // Register validation
  function validateRegister(data) {
    let errors = {};

    // Make empty fields into empty strings for validator
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // Check the name
    if (validator.isEmpty(data.name)) {
      errors.name = "Name is required";
    }

    // Check the email
    if (validator.isEmpty(data.email)) {
      errors.email = "Email is required";
    }
    if (!validator.isEmail(data.email)) {
      errors.email = "Email is not valid";
    }

    // Check the password
    if (validator.isEmpty(data.password)) {
      errors.password = "Password is required";
    }
    if (validator.isEmpty(data.password2)) {
      errors.password2 = "Confirm password is required";
    }
    if (!validator.equals(data.password, data.password2)) {
      errors.password2 = "Confirm password did not match";
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          errors.email = "Email already exists";
          return res.status(400).json(errors);
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                res.json({ success: false, msg: "Failed to register user" });
              } else {
                newUser.password = hash;
                newUser
                  .save()
                  .then((user) => {
                    res.json({ success: true, msg: "User registered" });
                  })
                  .catch((ex) => {
                    return res.status(500).send("Something went wrong");
                  });
              }
            });
          });
        }
      })
      .catch((ex) => {
        return res.status(500).send("Something went wrong");
      });
  }
});

// POST | api/auth/login
// Login process
router.post("/login", (req, res, next) => {
  const { errors, isValid } = validateLogin(req.body);

  // Login validation
  function validateLogin(data) {
    let errors = {};

    if (validator.isEmpty(data.email)) {
      errors.email = "Email is required";
    }
    if (!validator.isEmail(data.email)) {
      errors.email = "Email is not valid";
    }
    if (validator.isEmpty(data.password)) {
      errors.password = "Password is required";
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
      .then((user) => {
        // Check for users email
        if (!user) {
          errors.email = "Email does not exist";
          return res.status(400).json(errors);
        } else {
          // Check the password
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (isMatch) {
                // User matched
                const payload = {
                  id: user.id,
                  name: user.name,
                  role: user.role,
                };
                // Create JWT payload
                // Sign token
                jwt.sign(
                  payload,
                  key.secretOrKey,
                  { expiresIn: 86400 },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "JWT " + token,
                    });
                  }
                );
              } else {
                errors.password = "Password is incorrect";
                return res.status(400).json(errors);
              }
            })
            .catch((ex) => {
              return res.status(500).send("Something went wrong");
            });
        }
      })
      .catch((ex) => {
        return res.status(500).send("Something went wrong");
      });
  }
});

module.exports = router;
