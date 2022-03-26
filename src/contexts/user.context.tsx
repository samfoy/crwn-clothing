import { createContext, FC, useEffect, useState } from 'react';
import { User } from 'firebase/auth';

import {
  createUserDocument,
  onAuthStateChangedListener
} from '../firebase/firebase.utils';

export type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
