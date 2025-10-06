// Configuración de variables de entorno y validación con Zod
import { z } from 'zod';

const EnvSchema = z.object({
    MONGO_URI: z.string().min(1, 'MONGO_URI requerido'),
    PORT: z.string().regex(/^\d+$/).default('4000')
});

export function loadEnv(env = process.env) {
    const parsed = EnvSchema.safeParse(env);
    if (!parsed.success) {
        console.error('Error en variables de entorno', parsed.error.flatten().fieldErrors);
        process.exit(1);
    }
    return { MONGO_URI: parsed.data.MONGO_URI, PORT: Number(parsed.data.PORT) };
}