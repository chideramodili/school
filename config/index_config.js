const mongoose = require("mongoose");
const form = require("../models/student");
const dotenv = require("dotenv").config();

// CONNECT TO DB
async function database() {
  try {
    mongoose.connect(process.env.DB_CONNECT, console.log("connected to db"));
    const formArrangement = await form.find({}).sort({ date: -1 });

    console.log(formArrangement);
  } catch (error) {
    console.log(error);
  }
}

module.exports = database();
