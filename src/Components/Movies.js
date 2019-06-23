import React from 'react';
import Entries from './Sample.js';
import './GetEntries.css';
import 'bootstrap/dist/css/bootstrap.css';

class Movies extends React.Component {
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
                </ul>
            </div>
        );
    }
}
export default Movies;