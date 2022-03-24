import { createContext, FC, useState } from 'react';
import { IUser } from '../redux/user/user.types';

export type UserContextType = {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState<IUser | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
