const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  roleId: { type: Schema.Types.ObjectId, ref: "UserRoles" },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
