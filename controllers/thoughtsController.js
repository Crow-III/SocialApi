const Thought = require('../models/Thought');

module.exports = {
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.status(200).json(thoughts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Implement other thought controller functions here
};
