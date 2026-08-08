import express, { json, urlencoded } from 'express'
import conf from './config/config.js'
import cors from "cors"
import limiter from './middleware/rateLimiter.js';
import errorHandler from './middleware/errorHandler.js';
import apiHealthRoute from './routes/apiHealth.js';
import train from './routes/getTrain.js'

const app = express();

// basic configuations
app.use(json({limit: "16kb"}));
app.use(urlencoded({extended: true, limit: "16kb"}))

app.use(cors({
    origin: conf.origin?.split(',') || "http://localhost:5173",
    credentials: true,
    methods: ["GET", 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(limiter)

app.use('/api/health', apiHealthRoute)

app.use('/api/train', train)

app.use(errorHandler)

export default app;