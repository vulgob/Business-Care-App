import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Servicos from '../pages/Servicos';
import Agendamento from '../pages/Agendamento';
import Financeiro from '../pages/Financeiro';
import Layout from '../components/Layout';

const PrivateRoute = ({ children }) => {
  const hasToken = localStorage.getItem('token') !== null;
  if (!hasToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/layout"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="servicos" element={<Servicos />} />
          <Route path="agendamentos" element={<Agendamento />} />
          <Route path="financeiro" element={<Financeiro />} />
          
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

