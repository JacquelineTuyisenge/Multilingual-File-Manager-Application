import express from 'express';
import router from './routes/router.js';


const app = express();
app.use(express.json());
app.use('/api/', router);

export default app;
