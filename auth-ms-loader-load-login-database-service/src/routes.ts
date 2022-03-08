import { Router } from 'express';

import { livenessRoute, readinessRoute } from './routes/probes';

const routes = Router();

routes.use('/liveness', livenessRoute);
routes.use('/readiness', readinessRoute);

routes.get('/', (request, response) => {
  return response.json({ ok: true });
});

export default routes;
