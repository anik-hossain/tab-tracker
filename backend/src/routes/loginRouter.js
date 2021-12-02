/**
 * Title: Login Router
 * Description: Tab-Tracker Login Router
 * Author: Anik Hossain
 * Date: 12/1/2021
 */

const { Router } = require('express');

// Routing
const router = Router();

router.get('/', (req, res) => {
    res.status(401).json({
        message: 'its login router',
    });
});

module.exports = router;
