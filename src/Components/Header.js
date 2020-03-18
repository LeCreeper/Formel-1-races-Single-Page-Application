import React, { Component } from 'react'
import LogoImage from '../Assets/F1.logo.jpg'
import {Link } from 'react-router-dom'

class Header extends Component {

    render() {

        return (


            
                <div>

                    <div className="jumbotron">
                        <div className="container align-left">
                            
                            <div className="row">
                                <div className="col-md-6 align-center">
                                    <h1 className="align-center">Formel 1 Racerkørere!</h1>
                                    <img className="img-fluid rounded custom-img align-center" alt="Formel 1 Logo" src={LogoImage}/>
                                </div>
                                <div className="col-md-6"></div>  
                            </div>                    
                        </div>

                        {/* Her opretter vi en Navbar */ }
                        <div className="navbar navbar-expand-lg">
                            <ui className="nav navbar-nav mr-auto">
                                <li className="nav-item nav-link"> <Link to="/"> Drivers </Link> </li>
                                <li className="nav-item nav-link"> <Link to="/Racelist"> Races </Link> </li>

                            </ui>

                    </div>
                    </div>

                </div>
            

        )

    }

}

export default Header