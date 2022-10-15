import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticationPage } from './modules/Authentication';
import { Finder } from './modules/Finder';
import { ProtectRoute } from './utils/components/ProtectRoute/ProtectRoute';

export default function () {
  return (
    <Routes>
      <Route path="/*" element={<AuthenticationPage />} />
      <Route path="/home" element={<ProtectRoute />}>
        <Route path="/home/image-finder" element={<Finder />} />
      </Route>
    </Routes>
  );
}
