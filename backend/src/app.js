/**
 * Title: Tab-Tracker
 * Description: Tab-Tracker application
 * Author: Anik Hossain
 * Date: 12/01/2021
 */

// External Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Internal Dependencies
const config = require('./config/config');
const { sequelize } = require('./models/index');

// Routers
const authentication = require('./routes/authentication');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('combined'));

// Routing
app.use('/', authentication);
app.use('/login', authentication);

sequelize.sync().then(() => {
    app.listen(config.port, () => {
        console.log(`Server started on port ${config.port}`);
    });
});
