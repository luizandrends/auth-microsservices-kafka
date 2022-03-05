import { Router } from 'express';

import { livenessRoute, readinessRoute } from './routes/probes';
import userRouter from './routes/users/user.routes';

const routes = Router();

routes.use('/liveness', livenessRoute);
routes.use('/readiness', readinessRoute);

routes.use('/users', userRouter);

export default routes;
