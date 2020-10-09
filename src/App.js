import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <div id="calculator-wrapper">
            <div className='tester'>
              <Navbar />
            </div>
            <Calculator />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
