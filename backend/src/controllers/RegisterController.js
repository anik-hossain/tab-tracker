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
};
