import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/home';

const Main = () => (
    <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/index.html" component={Home}/>
        </div>
    </Router>
);

export default Main;