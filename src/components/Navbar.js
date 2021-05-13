import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button'
import Languages from './languages';
import Section1 from './section1';
import Section2 from './Section2';
import Donate from './donate';


function Navbar() {
    
    return (
        <div>
        <nav className="navbar">
            <div className="alert">
            <h3>Still working on it, adding components bla bla bla </h3></div>
            <div className="navbar-container">
                <Link to = "/" className="navbar-logo" >
                    <strong>CodeBank</strong>
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/how-it-works" className="nav-links">
                             How It Works
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/installation" className="nav-links">
                            Installation
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-links">
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources" className="nav-links">
                            Resources
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links">
                        <Button buttonStyle='btn--secondary'>
                            Sign Up
                        </Button>
                    
                        </Link>
                    </li>

                </ul>
                </div>
                <div className="description">
                    <h2>A place for most <br /> useful code snippets <br /> you need in your project</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem assumenda sequi quae libero vitae molestias quidem molestiae?
                    </p>
                    <Button buttonStyle='btn--primary'>
                         GET STARTED
                    </Button>
                    <Button className="btn" buttonStyle='btn--outline'>
                        LEARN MORE
                    </Button>  
            </div>
            
            </nav>
            <div className="lan">
                <Languages />
            </div>
            <div className="section1">
                <Section1 />
            </div>
            <div className="section2">
                <Section2 />
            </div>
            <div className="donate">
                <Donate />
            </div>
            </div>
        
    )
}

export default Navbar
