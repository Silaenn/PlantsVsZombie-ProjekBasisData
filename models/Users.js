const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  level_progress: { type: Number, default: 1 },
  unlocked_plants: [{ type: String }],
  inventory: {
    coins: { type: Number, default: 0 },
  },
  achievements: [{ type: String }],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Users", usersSchema);
