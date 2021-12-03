/**
 * Title: Register Router
 * Description: Tab-Tracker Register Router
 * Author: Anik Hossain
 * Date: 12/1/2021
 */

const { Router } = require('express');
const {
    registerController,
    loginController,
} = require('../controllers/authenticationController');
const registerValidator = require('../validators/registerValidator');

// Routing
const router = Router();

// Register
router.post('/register', registerValidator, registerController);

// Login
router.post('/login', loginController);

module.exports = router;
