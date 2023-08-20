const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Create a new user
router.post('/', UserController.createUser);

// Get all users
router.get('/', UserController.getAllUsers);

// Define other user routes here

module.exports = router;
