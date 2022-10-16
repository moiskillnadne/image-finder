import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesPath } from './constants/routes.constants';
import { AuthenticationPage } from './modules/Authentication';
import { Finder } from './modules/Finder';
import { ProtectRoute } from './utils/components/ProtectRoute/ProtectRoute';

export default function () {
  return (
    <Routes>
      <Route path="/*" element={<AuthenticationPage />} />
      <Route path="/home" element={<ProtectRoute />}>
        <Route path={RoutesPath.ImageFinderPage} element={<Finder />} />
      </Route>
    </Routes>
  );
}
