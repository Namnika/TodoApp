const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoListSchema = new Schema({
  text: String;
})

module.exports = mongoose.model("TodoList", todoListSchema);
