import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;