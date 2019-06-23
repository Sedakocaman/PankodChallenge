import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Series from './Series';
import Movies from './Movies';
import App from './App';


const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/series" component={Series} />
            <Route path="/movies" component={Movies} />
        </div>
    </Router>
)
export default routing;