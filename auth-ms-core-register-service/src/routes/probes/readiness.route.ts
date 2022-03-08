import { Router } from 'express';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.status(200).json({ status: 'health' });
});

export { routes as readinessRoute };
