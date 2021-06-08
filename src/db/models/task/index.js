const mongoose = require("mongoose");

const { Schema } = mongoose;

const costScheme = new Schema({
  text: String,
  text2: String,
  text3: String,
});

module.exports = Cost = mongoose.model("cost", costScheme);
