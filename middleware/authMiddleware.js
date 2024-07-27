import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import i18next from '../i18n.js';

dotenv.config();

const isLoggedIn = async (req, res, next) => {
    const headerValues = req.headers.authorization;

    if (!headerValues) {
        return res.status(401).json({ status: "UNAUTHORIZED", message: req.t("no_access") });
    }

    const token = req.headers.authorization?.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "fdrtjnbftuijhgfr4567");

        if (!decoded) {
            return res.status(401).json({ status: 'UNAUTHORIZED', message: req.t("login_to_continue") });
        }

        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: req.t("unauthorized") });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: req.t("internal_server_error") });
    }
};

export default isLoggedIn;
