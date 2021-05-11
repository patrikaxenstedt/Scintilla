const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create the user schema
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  // Roles avaible: member, admin
  role: {
    type: String,
    default: "member",
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("users", userSchema);
