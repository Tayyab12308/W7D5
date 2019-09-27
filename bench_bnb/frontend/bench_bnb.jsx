import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util'
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded" , () => {
  
  // TEST //
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  
  // TEST //
  window.store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});