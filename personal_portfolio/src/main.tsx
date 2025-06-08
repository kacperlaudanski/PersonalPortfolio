import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app'
import { AuthProvider } from './contexts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
