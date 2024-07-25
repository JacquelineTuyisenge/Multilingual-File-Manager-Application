import express from "express";
import welcome from "../controllers/welcome.js";

const welcomeRouter = express.Router();

welcomeRouter.get("/", welcome);
export default welcomeRouter;