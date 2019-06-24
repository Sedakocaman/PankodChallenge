import React from 'react';
import Entries from './Sample.js';
import './GetEntries.css';
import 'bootstrap/dist/css/bootstrap.css';

class GetSeries extends React.Component {
    componentDidMount(): void {
        this.setState({
            isLoading : false
        })
    }

    constructor(props) {
        super(props);
        const result = Entries.filter(Entries => Entries.programType === "series");
        console.log(result)

        this.state = {
            posts: result,
            isLoading : true
        };
    }
        render() {
        const {posts} = this.state;
        const {isLoading} = this.state;
        return(
            <div className="container-fluid">

                <h1>Diziler</h1>
                <ul>
                    {isLoading ? 'Loading...' : ''}
                    {
                        !isLoading ? posts.map(post => (
                            <li key={post.title} className="item">
                                <div>
                                    <img className="photo" src={post.images["Poster Art"].url} alt="Poster"/>
                                </div>
                                <div className="text-capitalize">
                                    <p className="title">{post.title}</p>
                                </div>
                            </li>

                        )) :null
                    }
                </ul>
            </div>
        );
    }
}
export default GetSeries;