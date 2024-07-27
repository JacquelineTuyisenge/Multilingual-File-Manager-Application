import express from 'express';
import router from './routes/router.js';
import i18next from './i18n.js';
import i18nextMiddleware from 'i18next-http-middleware'; // Ensure the correct import for i18next middleware
import bodyParser from 'body-parser';

const app = express();

app.use(i18nextMiddleware.handle(i18next)); // Middleware to handle internationalization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/', router);

export default app;
