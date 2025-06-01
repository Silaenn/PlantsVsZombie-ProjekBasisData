const mongoose = require("mongoose");

const waveSchema = new mongoose.Schema({
  wave_number: { type: Number, required: true },
  zombies: [{ type: String }],
  quantity: { type: Number, required: true },
  spawn_rate: { type: String, required: true },
});

const rewardSchema = new mongoose.Schema({
  unlocks_plant: { type: String, default: null },
  unlocks_achievement: { type: String, default: null },
});

const levelSchema = new mongoose.Schema({
  level_number: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  environment: { type: String, required: true },
  available_plants: [{ type: String }],
  zombie_waves: [waveSchema],
  difficulty: { type: String, required: true },
  reward: rewardSchema,
});

module.exports = mongoose.model("Level", levelSchema);
