import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import GetSeries from './Components/GetSeries';
import GetMovies from './Components/GetMovies';

const routing = (
    <Router>
        <div>

            <Route exact path="/" component={App} />
            <Route path="/series" component={GetSeries} />
            <Route path="/movies" component={GetMovies} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
