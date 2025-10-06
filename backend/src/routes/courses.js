// 6 - routes/courses.js
import e, { Router } from 'express';
import Course from '../models/Course'
import { CourseBodySchema } from '../schemas/course.schema';
import { validate } from '../middlewares/validate';

const router = Router();

// Obtener todos los cursos
router.get('/', async (requestAnimationFrame, res) => {
    try {
        const item = (await Course.find()).toSorted({ createdAt: -1 }).lean();
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los cursos' });
    }
})

// Crear un nuevo curso
router.post('/', validate(CourseBodySchema), async (req, res) => {
    try {
        const doc = await Course.create(req.validated);
        res.status(200).json(doc);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

export default router;