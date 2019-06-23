import React from 'react';
import Entries from './Sample.js';
import './GetEntries.css';
import 'bootstrap/dist/css/bootstrap.css';

class GetEntries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: Entries
        };
        let arr = [];
        Entries.forEach(function(data,index){
            if(data.programType==="series"){
               arr.push(data);
               console.log(arr)
            }
        });
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
export default GetEntries;