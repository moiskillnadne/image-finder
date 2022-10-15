import React, { StrictMode } from 'react';
import './global.css';
import ApplicationProvider from './providers/ApplicationProvider';
import Routes from './Routes';

function App() {
  return (
    <StrictMode>
      <ApplicationProvider>
        <Routes />
      </ApplicationProvider>
    </StrictMode>
  );
}

export default App;
