const mongoose = require("mongoose");

const zombieSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  speed: { type: String, required: true },
  health: { type: Number, required: true },
  damage: { type: Number, required: true },
  abilities: [{ type: String }],
  appears_in_levels: [{ type: Number }],
  weaknesses: [{ type: String }],
  image: { type: String, required: true },
});

module.exports = mongoose.model("Zombie", zombieSchema);
