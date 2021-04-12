const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


require('dotenv').config()

// Connect to MongoDB
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@rest.4cske.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });

mongoose.connection.once('open', ()=>{
console.log("Connected to MongoDB Atlas!");
}).then(()=>{
  app.listen(port,() => {
  console.log(`Listening to port: ${port}`);
  })
}).catch(err =>{
  console.log(err)
})

 // process.env.port is Heroku's port, for deploy the app there
const port = process.env.PORT || 5000;
