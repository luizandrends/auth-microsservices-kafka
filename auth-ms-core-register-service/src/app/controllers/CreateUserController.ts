import { Request, Response } from 'express';
import AppError from '../../errors/AppError';

import { findByEmail, createUser } from '../useCases/users';
import { sendEvent } from '../useCases/kafka/producers';
import { generateHash } from '../providers/BCrypt';

class CreateUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const emailExists = await findByEmail(email);

    if (emailExists) {
      throw new AppError('Email already exists', 401);
    }

    const hashedPassword = await generateHash(password);

    const user = await createUser({ name, email, password: hashedPassword });

    console.log('teste');

    await sendEvent({
      kafka: {
        topicName: 'auth-load-login-database',
      },
      name,
      email,
      password: hashedPassword,
    });

    return response.json(user);
  }
}

export default CreateUserController;
