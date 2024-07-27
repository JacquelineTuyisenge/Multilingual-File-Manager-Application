import validateUser from "../Validations/userValidation.js";

const isUserValid = async (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ status: "BAD REQUEST", message: req.t(error.details[0].message) });
    }
    try {
        next();
    } catch(error) {
        console.log(error);
    }
};

export default isUserValid;
