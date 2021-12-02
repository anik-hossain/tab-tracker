/**
 * Title: Register Router
 * Description: Tab-Tracker Register Router
 * Author: Anik Hossain
 * Date: 12/1/2021
 */

const { Router } = require('express');
const { registerController } = require('../controllers/RegisterController');

// Routing
const router = Router();

router.post('/', registerController);

module.exports = router;
