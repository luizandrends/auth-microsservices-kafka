import { consumer } from './app';

import CreateUserController from './app/controllers/CreateUserController';

export const init = async () => {
  await consumer.connect();

  await consumer.subscribe({ topic: 'auth-load-login-database' });

  const createUserController = new CreateUserController();

  await consumer.run({
    eachMessage: async ({ message }) => {
      const value = message.value?.toString();

      createUserController.create(value);
    },
  });
};

init();
