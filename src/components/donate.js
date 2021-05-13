import React from 'react';
import { Link } from 'react-router-dom';
import './donate.css'

function Donate() {
    return (
        <div className="donate">
            <h2>Help us grow this project. Partner with us today</h2>
            <div className="btnss">
            <Link to='/sign-up'>
                <button className="btn1 btn-three">
                    Become A Contributor
                 </button>
            </Link>
            <Link to='/sign-up'>
                <button className="btn1 btn-one extr">
                    Donate
                 </button>
                </Link>
                </div>
        </div>
    )
}

export default Donate
