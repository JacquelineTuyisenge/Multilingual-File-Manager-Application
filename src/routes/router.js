const express = require('express');
const authRoutes = require('./authRoutes.js');
const fileRouter = require('./fileRoutes.js');
const welcomeRouter = require('./welcomeRouter.js');

const router = express.Router();

router.use('/auth', authRoutes); // user
router.use('/files', fileRouter); // file
router.use('/', welcomeRouter); // welcome message

module.exports = router;
