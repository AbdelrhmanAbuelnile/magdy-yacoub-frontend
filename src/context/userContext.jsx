/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

 const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(token);
  }, [token])
  return ( 
    <AuthContext.Provider value={{ token, setToken,user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;