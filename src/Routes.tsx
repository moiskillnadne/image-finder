import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticationPage } from './modules/Authentication';

export default function () {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationPage />} />
      <Route path="/home" element={<AuthenticationPage />} />
    </Routes>
  );
}
