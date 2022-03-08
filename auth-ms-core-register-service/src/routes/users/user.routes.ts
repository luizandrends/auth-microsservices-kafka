import { Router } from 'express';

import CreateUserController from '../../app/controllers/CreateUserController';

const createUserController = new CreateUserController();

const routes = Router();

routes.post('/create', createUserController.create);

export default routes;
