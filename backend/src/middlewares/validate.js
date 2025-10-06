// 5 - Middleware de validación usando Zod
export function validate(schema) {
    return (req, res, next) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            const errors = parsed.error.flatten();
            return res.status(404)
                .json({ error: 'Validacion fallida', details: errors.fieldErrors });
        }
        req.validated = parsed.data;
        next();
    }
}