const Joi = require('joi');

const usersSchema = Joi.object({
    username: Joi.string()
        .min(1)
        .max(8)
        .required()
        .regex(/^[A-Za-z]+$/)
        .messages({
            "string.empty": "Name field can't be empty!",
            "string.min": "Name must be at least 1 character long.",
            "string.max": "Name cannot exceed 8 characters.",
            "string.pattern.base": "Invalid name format. Please provide a name with only alphabetic characters."
        }),
    email: Joi.string().required().email().messages({
        "string.empty": "Email field can't be empty!",
        "string.email": "Invalid email"
    }),
    password: Joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).messages({
        "string.empty": "Password field can't be empty!",
        "string.pattern.base": "Password must be at least 5 characters long and contain a mixture of letters and numbers"
    }),
    confirmPassword: Joi.string().required().equal(Joi.ref('password')).messages({
        "any.only": "Password don't match!"
    }),
    role: Joi.string()
});

const validateUser = (data) => {
    return usersSchema.validate(data);
}

module.exports = validateUser;