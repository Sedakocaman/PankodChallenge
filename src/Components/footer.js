import React from 'react';
import './GetEntries.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AppFooter extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12 col-sm-12">
                                <ul>
                                    <li className="home-ft">
                                        Home <span>|</span>
                                    </li>
                                    <li>
                                        Terms and Conditions <span>|</span>
                                    </li>
                                    <li>
                                        Privacy Policy <span>|</span>
                                    </li>
                                    <li>
                                        Collection Statement <span>|</span>
                                    </li>
                                    <li>
                                        Help <span>|</span>
                                    </li>
                                    <li>
                                        Manage Account
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row copy">
                            <div className="col-md-12 col-sm-12 col-12">
                                <p>Copyring © 2016 DEMO Streaming All Rights Reserved.</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12 col-sm-12 col-12">
                                <div className="row">
                                <div className="col-md-4 col-sm-6 col-6 social-media">
                            <ul>
                                <li>
                                    Facebook
                                </li>
                                <li>
                                    Twitter
                                </li>
                                <li>
                                    İnstagram
                                </li>
                            </ul>

                                </div>
                                <div className="col-md-8 col-6 col-sm-6 store">
                                    <ul>
                                        <li>
                                            App Store
                                        </li>
                                        <li>
                                        Google Play
                                        </li>
                                        <li>
                                            Microsoft
                                        </li>
                                    </ul>
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
export default AppFooter;