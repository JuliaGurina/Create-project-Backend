const mongoose = require("mongoose");

const { Schema } = mongoose;

const tasksScheme = new Schema({
  shop: String,
  isDate: String,
  price: String,
});

module.exports = Cost = mongoose.model("cost", tasksScheme);
