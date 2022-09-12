import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@styles/global.css';
import Layout from '@containers/Layout';

import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import SendEmail from '@pages/SendEmail';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename='/React-shop'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;