import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

const ProtectedRoute = ({ children }) => {
  const {user} = useUser();

  return user.role == "admin" ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;