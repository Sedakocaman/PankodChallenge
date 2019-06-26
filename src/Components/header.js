import React from 'react';
import './GetEntries.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AppHeader extends React.Component{
    render() {
        return(


            <div className="container-fluid">
                <div className="row header-bg">
                    <div className="container">
                        <div className="row">

            <div className="col-md-12 col-12  col-sm-12">
                <div className="row">
                    <div className="col-md-6 col-6 col- col-sm-6">
                        <h1>DEMO Streaming</h1>
                    </div>
                    <div className="col-md-6 col-6 col-sm-6 log-in">
                        <button>
                            Login
                        </button>
                        <a href= "#">
                            Start your free trial
                        </a>
                    </div>
            </div>
            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default AppHeader;