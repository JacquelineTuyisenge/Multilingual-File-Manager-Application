import Joi from "joi";

const usersSchema = Joi.object({
    username: Joi.string()
        .min(1)
        .max(8)
        .required()
        .regex(/^[A-Za-z]+$/)
        .messages({
            "string.empty": "username_required",
            "string.min": "username_min",
            "string.max": "username_max",
            "string.pattern.base": "username_invalid"
        }),
    email: Joi.string().required().email().messages({
        "string.empty": "email_required",
        "string.email": "email_invalid"
    }),
    password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/).messages({
        "string.empty": "password_required",
        "string.pattern.base": "password_invalid"
    }),
    confirmPassword: Joi.string().required().equal(Joi.ref('password')).messages({
        "any.only": "password_mismatch"
    }),
    role: Joi.string()
});

const validateUser = (data) => {
    return usersSchema.validate(data);
}

export default validateUser;
