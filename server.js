const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('./models/User');
require('dotenv').config()
require('./config/passport')(passport);

// Bodyparser middleware
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use('/api/auth', auth);
app.use('/api/users', users);

// Routes
const auth = require('./routes/api/auth');
const users = require('./routes/api/users');

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
