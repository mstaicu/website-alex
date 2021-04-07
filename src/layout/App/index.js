import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from '../Routes';
import { Loader } from '../../components';

export const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
  </BrowserRouter>
);
