import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ... otras rutas ... */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
