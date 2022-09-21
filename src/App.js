// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Router from './Router';
import NavBar from './Containers/NavBar';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        {/* <Login/> */}
        <Router />
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
