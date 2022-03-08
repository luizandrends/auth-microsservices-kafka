import { getRepository } from 'typeorm';

import AuthLogin from '../../schemas/AuthLogin';

import UserDTO from '../../dtos/UserDTO';

export const createUser = async (userData: UserDTO): Promise<AuthLogin> => {
  const createUserRepository = getRepository(AuthLogin);
  const { email, password, userId } = userData;

  const user = await createUserRepository.create({
    email,
    password,
    user_id_users: userId,
  });

  await createUserRepository.save(user);

  return user;
};
