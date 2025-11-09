import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUsers] = useState();
  const [loading, setLoading] = useState();

  const AuthData = {
    user,
    loading,
  };

  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
