const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  cost: { type: Number, required: true },
  damage: { type: Number, required: true },
  health: { type: Number, required: true },
  recharge: { type: Number, required: true },
  range: { type: String, required: true },
  special_abilities: [{ type: String }],
  sun_production: { type: Boolean, default: false },
  unlock_level: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Plant", plantSchema);
