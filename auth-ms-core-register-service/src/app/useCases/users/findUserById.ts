import { getRepository } from 'typeorm';
import User from '../../schemas/User';

import UserDTO from '../../dtos/UserDTO';

export const createUser = async (userData: UserDTO): Promise<User> => {
  const createUserRepository = getRepository(User);
  const { name, email, password } = userData;

  const user = await createUserRepository.create({
    name,
    email,
    password,
  });

  await createUserRepository.save(user);

  return user;
};

export const findUserById = async (userId: string): Promise<boolean> => {
  const findUserRepository = getRepository(User);

  const checkIfUserExists = await findUserRepository.findOne({
    where: { id: userId },
  });

  if (checkIfUserExists) {
    return true;
  }

  return false;
};

export const findByEmail = async (email: string): Promise<boolean> => {
  const findUserEmail = getRepository(User);

  const checkIfEmailExists = await findUserEmail.findOne({
    where: { email },
  });

  if (checkIfEmailExists) {
    return true;
  }

  return false;
};
