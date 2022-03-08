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

export const findUserById = async (userId: string): Promise<boolean> => {
  const findUserRepository = getRepository(AuthLogin);

  const checkIfUserExists = await findUserRepository.findOne({
    where: { user_id_users: userId },
  });

  if (checkIfUserExists) {
    return true;
  }

  return false;
};

export const findByEmail = async (email: string): Promise<boolean> => {
  const findUserEmail = getRepository(AuthLogin);

  const checkIfEmailExists = await findUserEmail.findOne({
    where: { email },
  });

  if (checkIfEmailExists) {
    return true;
  }

  return false;
};
