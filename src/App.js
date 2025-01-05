
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './nav-footer/Layout';
import HomePage from './pages/HomePage';
import RepositoryPage from './pages/RepositoryPage';
import FollowersPage from './pages/FollowersPage';
import UserInfo from './pages/UserInfo';

const App = () => (
  <BrowserRouter>
  <Layout>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/repository/:repoName" element={<RepositoryPage />} />
      <Route path="/followers/:username" element={<FollowersPage />} />
        <Route path="/repository/:username/:repoName" element={<UserInfo/>} />
    </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
