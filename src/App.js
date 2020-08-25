import React from 'react';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/nashcode">
        <Route exact path="/" component={Home} />
        <Route exact path="/our-work" component={OurWork} />
      </Router>
    </div>
  );
}

export default App;
