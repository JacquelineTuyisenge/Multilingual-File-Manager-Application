import express from "express";
import welcome from "../controllers/welcome.js";

const welcomeRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Welcome
 *   description: Welcome message
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get welcome message
 *     tags: [Welcome]
 *     responses:
 *       200:
 *         description: Successfully retrieved welcome message
 */
welcomeRouter.get("/", welcome);

export default welcomeRouter;
