const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const isAdmin = require("../../guards/isAdmin");

// Import user model
require("../../models/User");
const User = mongoose.model("users");

// GET | api/users/profile
// Import passport
require("../../config/passport")(passport);
// view current user profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ _id: req.user.id })
      .then((user) => {
        if (user) {
          res.json({ success: true, user });
        } else {
          res.json({ success: false, message: "User not found" });
        }
      })
      .catch((ex) => {
        return res.status(500).send("Something went wrong");
      });
  }
);

// GET | api/users
// view users list if Admin
router.get(
  "/",
  //[passport.authenticate('jwt', { session: false }), isAdmin],
  (req, res) => {
    User.find({})
      .then((users) => {
        if (users) {
          res.json({ success: true, users });
        } else {
          res.json({ success: false, message: "Users not found" });
        }
      })
      .catch((ex) => {
        return res.status(500).send("Something went wrong");
      });
  }
);

// GET | api/users/show/:id
// get user
router.get(
  "/show/:id",
  //[passport.authenticate('jwt', { session: false }), isAdmin],
  (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((user) => {
        if (user) {
          res.json({ success: true, user });
        } else {
          res.json({ success: false, message: "User not found" });
        }
      })
      .catch((ex) => {
        return res.status(500).send("Something went wrong");
      });
  }
);

// PUT | api/users/update
// UPDATE user NEW
router.post("/update/:id", function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user) res.status(404).send("Data is not found");
    else {
      user.name = req.body.name;
      user.email = req.body.email;
      user.role = req.body.role;

      user
        .save()
        .then((user) => {
          res.json({ msg: "Success" });
        })
        .catch((err) => {
          res.json({ msg: "Falied" });
        });
    }
  });
});

// ADD user
router.post("/users/add", function (req, res) {
  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.role = req.body.role;

  user.save(function (err) {
    if (err) {
      console.log(err);
      res.json({ msg: "Failed" });
    } else {
      res.json(user);
    }
  });
});

// DELETE user
router.post("/delete/:id", function (req, res) {
  let query = { _id: req.params.id };

  User.findByIdAndDelete(query, function (err) {
    if (err) {
      console.log(err);
      res.json({ msg: "Failed" });
      return;
    } else {
      res.json({ msg: "User deleted successfully." });
    }
  });
});

module.exports = router;
