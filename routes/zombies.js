const express = require("express");
const router = express.Router();
const Zombie = require("../models/Zombie");

router.post("/", async (req, res) => {
  try {
    const zombie = new Zombie(req.body);
    await zombie.save();
    res.status(201).json(zombie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const zombies = await Zombie.find();
    res.json(zombies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const zombie = await Zombie.findById(req.params.id);
    if (!zombie) return res.status(404).json({ message: "Zombie not found" });
    res.json(zombie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const zombie = await Zombie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!zombie) return res.status(404).json({ message: "Zombie not found" });
    res.json(zombie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const zombie = await Zombie.findByIdAndDelete(req.params.id);
    if (!zombie) return res.status(404).json({ message: "Zombie not found" });
    res.json({ message: "Zombie deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
