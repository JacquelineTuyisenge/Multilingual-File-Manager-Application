const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const isLoggedIn = async (req, res, next) => {

    const headerValues = req.headers.authorization;

    if (!headerValues) {
        return res.status(401).json({ status: "UNAUTHORIZED", message: "no access" });
    }

    const token = req.headers.authorization?.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "fdrtjnbftuijhgfr4567");

        if (!decoded) {
            return res.status(401).json({ status: 'UNAUTHORIZED', message: "login to continue" });
        }

        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = isLoggedIn;
