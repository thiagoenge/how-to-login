import { createContext, useContext, ReactNode, useState } from "react";
import { User } from "src/interfaces";

type authContextType = {
  user: User | null;
  login: (user:User) => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>(null);

  const login = (user:User) => {
      setUser(user);
  };

  const logout = () => {
      setUser(null);
  };

  const value = {
      user,
      login,
      logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
    </>
  )
}
