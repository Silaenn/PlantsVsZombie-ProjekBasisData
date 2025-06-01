const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  achievement_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  reward_coins: { type: Number, required: true },
  unlocks_plant: { type: String, default: null },
  icon: { type: String, required: true },
});

module.exports = mongoose.model("Achievement", achievementSchema);
