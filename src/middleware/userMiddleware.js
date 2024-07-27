const validateUser = require('../Validations/userValidation.js');

const isUserValid = async (req, res, next) => {
    const { error } = validateUser(req.body);
    if (error) {
        console.log("validation eroor***********************",error);
        console.log("Validation Error in details:::::::::::::::::::::::::::::::::", error.details[0].message);
        console.log("payload&&&&&&&&&&&&&&&&&&&&&&&&&&&", req.body);
        return res.status(400).json({ status: "BAD REQUEST", message: error.details[0].message });
    }
    try {
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "INTERNAL SERVER ERROR", message: "An error occurred" });
    }
};

module.exports = isUserValid;
