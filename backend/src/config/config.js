const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT || 3001,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.PASSWORD || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite',
        },
    },
    token: {
        jwtSecret:
            process.env.JWT_SECRET ||
            '8110b7458026c6234616d06c0894fc7c8d5e4c9446a9dc3ceeccb75f2b0a700f88babe6d2459276113db7560dff7968d8f',
    },
};
