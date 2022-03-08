import { createUser, findByEmail, findUserById } from '../useCases/users';
import AppError from '../../errors/AppError';

class CreateUserController {
  public async create(event: string | undefined): Promise<void> {
    const parsedEvent = JSON.parse(event as string);

    const { email, password, userId } = parsedEvent;

    const emailExists = await findByEmail(email);
    const userExists = await findUserById(userId);

    if (emailExists) {
      throw new AppError('Email already exists', 401);
    }

    if (userExists) {
      throw new AppError('User already exists', 401);
    }

    await createUser({
      email,
      password,
      userId,
    });
  }
}

export default CreateUserController;
