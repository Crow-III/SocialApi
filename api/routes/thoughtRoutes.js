const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/thoughtController');

// Create a new thought
router.post('/', ThoughtController.createThought);

// Get all thoughts
router.get('/', ThoughtController.getAllThoughts);

// Define other thought routes here

module.exports = router;
