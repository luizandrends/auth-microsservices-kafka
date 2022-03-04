import { Router } from 'express';

import { livenessRoute, readinessRoute } from './probes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ ok: true });
});

routes.use('/liveness', livenessRoute);
routes.use('/readiness', readinessRoute);

export default routes;
