const mongoose = require("mongoose");

const robotSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true },
  university: { type: String },
  job: { type: String },
  company: { type: String },
  skills: [{}],
  phone: String,
  address: {
    street_num: Number,
    street_name: String,
    city: String,
    state_or_province: String,
    postal_code: Number,
    country: String
  }
});

const Robots = (module.exports = mongoose.model("Robot", robotSchema));
