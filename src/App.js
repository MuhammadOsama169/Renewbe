import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './Component/HomePage';
import { Navbar } from './Component/Navbar';
import { Footer } from './Component/Footer';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};
