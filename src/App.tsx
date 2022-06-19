import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import { aMenuItems } from './components/interface/iMenu';
import { Layout } from './components/layout/layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const HomePage = React.lazy(() => import('./pages/productsPage'));
  const PackPage = React.lazy(() => import('./pages/packsPage'));
  const UnitPage = React.lazy(() => import('./pages/unitPage.'));
  const options: aMenuItems = [
    { path: '', label: 'Products', page: <HomePage /> },
    { path: '/pack', label: 'Pack', page: <PackPage /> },
    { path: '/unit', label: 'Unit', page: <UnitPage /> },
  ];
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense>
          <Routes>
            {options.map((item) => (
              <Route
                key={item.label}
                path={item.path}
                element={item.page}
              ></Route>
            ))}
          </Routes>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
