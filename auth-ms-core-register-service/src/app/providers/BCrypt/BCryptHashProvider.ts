import { hash } from 'bcryptjs';

export const generateHash = (payload: string): Promise<string> => {
  return hash(payload, 8);
};
