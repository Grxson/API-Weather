import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/error.middleware.js';
import weatherRoutes from './routes/weather.routes.js';
import { limiter } from './middlewares/rateLimit.middleware.js';



dotenv.config();
const app = express();
app.use(express.json());
app.use(limiter);

app.use('/api/v1/weather', weatherRoutes);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})