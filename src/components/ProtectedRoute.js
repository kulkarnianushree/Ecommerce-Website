// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

const ProtectedRoute = ({ element }) => {
  const authCtx = useContext(AuthContext);
  return authCtx.token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
