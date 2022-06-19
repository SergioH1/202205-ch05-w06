import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import { aMenuItems } from './components/interface/iMenu';
import { Layout } from './components/layout/layout';

function App() {
  const HomePage = React.lazy(() => import('./pages/productsPage'));
  const options: aMenuItems = [
    { path: '', label: 'Products', page: <HomePage /> },
  ];
  return (
    <>
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
    </>
  );
}

export default App;
