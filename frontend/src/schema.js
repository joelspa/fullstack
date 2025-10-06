// 2 - Api - Zod
import {z} from 'zod';
export const CourseFromSchema = z.object({
    title: z.string().min(1, 'El titulo es obligatorio').max(100, 'Maximo 100 caracteres'),
    description: z.string().max(500, 'Maximo 500 caracteres').optional().default(''),
    level: z.enum(['Básico', 'Intermedio', 'Avanzado'],  {message: 'Nivel inválido'}),
    published: z.boolean()
})