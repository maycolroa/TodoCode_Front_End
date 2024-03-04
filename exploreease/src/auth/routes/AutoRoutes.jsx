import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages, RegisterPage } from '../pages';

export const AutoRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={ <LoginPages />} />
      <Route path='register' element={ <RegisterPage />} />

      <Route path='*/' element={ <Navigateto to='/auth' />} />
    </Routes>
  )
}
