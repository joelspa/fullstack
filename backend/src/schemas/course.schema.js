// 4 - Definición del esquema de validación para cursos
import {z} from 'zod';

export const CourseBodySchema = z.object({
    title: z.string().min(1, 'El título requerido').max(100),
    description: z.string().max(500).optional(),
    level: z.enum(['basico', 'intermedio', 'avanzado']).default('basico'),
    published: z.boolean().optional().default(false)
})

