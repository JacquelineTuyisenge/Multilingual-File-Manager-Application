import express from 'express';
import router from './routes/router.js';
import swaggerDocs from './swaggerConfig.js';
import swaggerUiExpress from 'swagger-ui-express';             

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerDocs.serve, swaggerUiExpress.setup(swaggerDocs));
app.use('/api/', router);

export default app;
