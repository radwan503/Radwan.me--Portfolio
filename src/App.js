import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Preview from './pages/Preview';
import Header from './components/element/Header';
import Contact from './components/Contact';
import Footer from './components/element/Footer';
import Service from './pages/Service';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/preview/:id" component={Preview} />
            <Route path="/service" component={Service} />
          </Switch>
        </div>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
