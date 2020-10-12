import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <div id="calculator-wrapper">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Calculator} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
