import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import './App.css';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
