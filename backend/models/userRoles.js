const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  role: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserRoles", userRoleSchema);
