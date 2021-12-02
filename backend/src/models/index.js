/**
 * Title: Application Model
 * Description: Tab-Tracker Application Model
 * Author: Anik Hossain
 * Date: 12/2/2021
 */

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');

const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.passowrd,
    config.db.options
);

fs.readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
