const mongoose = require("mongoose");
const student = mongoose.Schema({
  user1: { type: String, required: true },

  role1: {
    type: String,
    required: true
  },
  user2: { type: String, required: true },

  role2: {
    type: String,
    required: true
  },
  user3: { type: String, required: true },

  role3: {
    type: String,
    required: true
  },
  user4: { type: String, required: true },

  role4: {
    type: String,
    required: true
  },
  user5: { type: String, required: true },

  role5: {
    type: String,
    required: true
  },

  group_title: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,

    default: Date.now
  }
});
module.exports = mongoose.model("student", student);
