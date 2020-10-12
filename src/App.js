import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  HashRouter as Router,
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';

const App = () => {

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
