import React from 'react';
import './GetEntries.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../assets/social/facebook-white.svg'
import instagram from '../assets/social/instagram-white.svg';
import twitter from '../assets/social/twitter-white.svg';
import appStore from '../assets/store/app-store.svg';
import playStore from '../assets/store/play-store.svg';
import windowsStore from '../assets/store/windows-store.svg';


class AppFooter extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row footer">
                    <div className="container">
                        <div className="row site-map">
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
                                    <img className="fb" src={facebook} alt=""/>
                                </li>
                                <li>
                                    <img src={twitter} alt=""/>
                                </li>
                                <li>
                                    <img src={instagram} alt=""/>
                                </li>
                            </ul>

                                </div>
                                <div className="col-md-8 col-6 col-sm-6 store">
                                    <ul>
                                        <li>
                                            <img src={appStore} alt=""/>
                                        </li>
                                        <li>
                                            <img src={playStore} alt=""/>
                                        </li>
                                        <li>
                                            <img src={windowsStore} alt=""/>
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