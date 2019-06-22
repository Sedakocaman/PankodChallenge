import React from 'react';
import Entries from './Sample.js';
import './GetEntries.css';

// get posts from online api
// it's return a json file
class GetEntries extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts :Entries
        };
    }
    render() {
        const {posts} = this.state;
        return(
            <div>
                <ul>
                    {
                        posts.map(post => (
                            <li key={post.title} className="item">
                                <div>
                                    <p className="title">{post.title}</p>
                                    <p className="body">{post.description}</p>
                                    <p>{post.programType}</p>
                                    <p>{post.releaseYear}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default GetEntries;