import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <><BrowserRouter>
      <Navbar />
    </BrowserRouter><div>
      </div></>
  );
}

export default App;

