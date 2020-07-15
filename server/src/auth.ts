import { User } from './entity/User';
import { sign } from 'jsonwebtoken';

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, 'asdflkjadf', {
    expiresIn: '15m',
  });
};

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, '13rjfdslffd9', {
    expiresIn: '7d',
  });
};
