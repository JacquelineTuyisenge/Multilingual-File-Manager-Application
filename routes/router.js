import express from "express";
import authRoutes from './authRoutes.js';
import fileRouter from "./fileRoutes.js";
import welcomeRouter from "./welcomeRouter.js";

const router = express.Router();

router.use('/auth', authRoutes); // user
router.use('/files', fileRouter); //file
router.use('/', welcomeRouter); // welcome message


export default router
