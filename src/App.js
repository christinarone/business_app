// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
    <Login/>
      <Router />
    </BrowserRouter>
  );
}

export default App;
