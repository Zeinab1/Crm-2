
import React from 'react';
import Navbar from './layout/Navbar';
import Clients from './components/clients';
import AddClient from './components/clients/AddClient';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

import './App.css';


function App() {
  return (
    <Router>

    <div>
      <Navbar/>
      <Routes />
    </div>
    </Router>
  );
}

export default App;
