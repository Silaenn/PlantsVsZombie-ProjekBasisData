const express = require("express");
const router = express.Router();
const Level = require("../models/Level");

router.post("/", async (req, res) => {
  try {
    const level = new Level(req.body);
    await level.save();
    res.status(201).json(level);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const levels = await Level.find();
    res.json(levels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const level = await Level.findById(req.params.id);
    if (!level) return res.status(404).json({ message: "Level not found" });
    res.json(level);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const level = await Level.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!level) return res.status(404).json({ message: "Level not found" });
    res.json(level);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const level = await Level.findByIdAndDelete(req.params.id);
    if (!level) return res.status(404).json({ message: "Level not found" });
    res.json({ message: "Level deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
