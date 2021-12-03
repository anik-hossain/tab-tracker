const { User } = require('../models/index');

module.exports = {
    async registerController(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (errors) {
            res.status(400).json({
                error: 'Email already use',
            });
        }
    },
    async loginController(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(400).json({
                    error: 'Email or password not match',
                });
            }
            const isValidPassword = password === user.password;
            if (!isValidPassword) {
                return res.status(400).json({
                    error: 'Email or password not match',
                });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error',
            });
        }
    },
};
