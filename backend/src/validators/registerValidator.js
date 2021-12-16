const Joi = require('joi');

const registerValidator = async (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')),
    });

    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        switch (error.details[0].context.key) {
            case 'email':
                res.status(400).json({
                    error: 'You must provie a valid email address',
                });
                break;
            case 'password':
                res.status(400).json({
                    error: 'Password must be at least 8 characters long',
                });
            default:
                res.status(400).json({
                    error: 'Invalid Information',
                });
                break;
        }
    }
};

module.exports = registerValidator;
