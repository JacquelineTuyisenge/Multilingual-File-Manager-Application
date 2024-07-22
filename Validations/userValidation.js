import Joi from "joi";

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
    password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/).messages({
        "string.empty": "Password field can't be empty!",
        "string.pattern.base": "Password must be between 6 and 10 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
    }),
    confirmPassword: Joi.string().required().equal(Joi.ref('password')).messages({
        "any.only": "Password don't match!"
    }),
    role: Joi.string()
});

const validateUser = (data) => {
    return usersSchema.validate(data);
}

export default validateUser;