import React from 'react';
import Entries from './Sample.js';
import './GetEntries.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from "./header";
import AppFooter from "./footer";


class GetMovies extends React.Component {


    constructor(props) {
        super(props);
        const result = Entries.filter(Entries => Entries.programType === "movie");
        this.state = {
            posts: result
        };
    }
    render() {
        const {posts} = this.state;
        return(
            <div className="container-fluid">
                <div className="row titles">
                    <AppHeader/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12 col-sm-12">
                                <h1>
                                    Popular Movies
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <ul>
                                {
                                    posts.map(post => (
                                        <li key={post.title} className="item">
                                            <div>
                                                <img className="photo" src={post.images["Poster Art"].url} alt="Poster"/>
                                            </div>
                                            <div className="text-capitalize">
                                                <p className="title">{post.title}</p>
                                            </div>
                                        </li>

                                    ))
                                }
                            </ul> </div></div></div>
                <div className="row">
                    <AppFooter/>
                </div>
            </div>
        );
    }
}
export default GetMovies;