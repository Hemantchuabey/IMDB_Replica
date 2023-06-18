const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: [String], required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model("Movie", MovieSchema);
