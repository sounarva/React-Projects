import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // localStorage.clear();

  useEffect(() => {
    setLocalStorage();
    const { employees_data} = getLocalStorage();
    setUserData(employees_data);
  },[]);

  return (
      <AuthContext.Provider value={[userData , setUserData]}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
