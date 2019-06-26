import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import GetSeries from "./GetSeries";
import GetMovies from "./GetMovies";
import ReactDOM from "react-dom";
import placeholder from '../assets/placeholder.png'

const routing = (
    <Router>
        <div>

            <Route exact path="/" component={App} />
            <Route path="/series" component={GetSeries} />
            <Route path="/movies" component={GetMovies} />
        </div>
    </Router>
)

class Home extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row titles">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12 col-sm-12">
                                <h1>
                                    Popular Titles
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                                 <div className="col-md-12 home-page">
                             <Link to={"/series"}>
                                 <img src={placeholder} alt=""/>
                                <h1>Popular Series</h1>
                                 <p>SERIES</p>
                              </Link>
                              <Link to={"/movies"}>
                                  <img src={placeholder} alt=""/>
                                  <h1>Popular Movies</h1>
                                  <h2>MOVIES</h2>
                              </Link>
                        </div>

                        </div>

                    </div>
                </div>



            </div>
        )
    }
}

ReactDOM.render(routing, document.getElementById('root'))
export default Home;