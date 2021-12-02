/**
 * Title: User Model
 * Description: Tab-Tracker User Model
 * Author: Anik Hossain
 * Date: 12/2/2021
 */

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: DataTypes.STRING,
    });
    return User;
};
