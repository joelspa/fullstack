// 2
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config'; // Cargar variables de entorno
import { loadEnv } from './config.js';
import coursesRouter from './routes/courses.js';


const app = express();

// Configuración de middlewares

app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/api/health', (req, res) => {
    res.json({ ok: true, ts: new Date().toISOString() });
})

// Rutas
app.use('/api/courses', coursesRouter);

const { PORT, MONGO_URI } = loadEnv();
mongoose.connect(MONGO_URI) // Conectar a MongoDB
    .then(() => {
        console.log('Conectado a BD');
        app.listen(PORT, () => {
            console.log(`Backend en: http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error de conexion a BD', err.message);
        process.exit(1);
    }); 