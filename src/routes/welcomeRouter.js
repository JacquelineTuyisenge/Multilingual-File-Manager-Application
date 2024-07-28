const express = require('express');
const welcome = require('../controllers/welcome.js');

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

module.exports = welcomeRouter;
