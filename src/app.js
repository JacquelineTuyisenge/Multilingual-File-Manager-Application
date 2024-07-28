const express = require('express');
const router = require('./routes/router.js');
const swaggerDocs = require('../swaggerConfig.js');
const swaggerUiExpress = require('swagger-ui-express');   

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));
app.use('/api/', router);

module.exports = app;
