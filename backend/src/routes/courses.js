import { Router } from 'express';

const router = Router();

// Minimal routes to avoid import errors during startup
router.get('/', (req, res) => {
  res.json({ ok: true, message: 'Courses route' });
});

export default router;
