import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Hom />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    <Route path='/posts/:id' element={<Post />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;