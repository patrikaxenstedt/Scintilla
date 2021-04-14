const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// INITIALIZE APP
const app = express();

// MODELS
require("./models/User");

// MIDDLEWARES
// cors
app.use(cors());
// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport config
require("./config/passport")(passport);

// Connect to MongoDB
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@rest.4cske.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);

mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoDB Atlas!");
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening to port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// ROUTES
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");

// USE ROUTES
app.use("/api/auth", auth);
app.use("/api/users", users);

// STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// SET PORT
const port = process.env.PORT || 5000;
