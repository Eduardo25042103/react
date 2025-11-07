import { useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    setIsAdmin(false);
  };

  const loginAsAdmin = () => {
    setIsLoggedIn(true);
    setIsAdmin(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return { isLoggedIn, isAdmin, login, loginAsAdmin, logout };
};