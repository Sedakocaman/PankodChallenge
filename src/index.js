import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Series from './Components/Series';
import Movies from './Components/Movies';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/series" component={Series} />
            <Route path="/Movies" component={Movies} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
