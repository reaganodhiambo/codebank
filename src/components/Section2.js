import React from 'react'
import {Link} from 'react-router-dom'
import './Section2.css';

function Section2() {
    return (
        <div className="section2">
            <div className="install">
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae omnis beatae reiciendis adipisci non, officiis provident,
                    aliquid itaque voluptas est pariatur, iste corporis. Quos hic
                saepe voluptatum deserunt inventore perferendis.</p>
                <div className="install">
                    <Link to='/install'>
                        <button className="btn1 btn-one">
                           Install
                        </button>
                    </Link>
                
                </div>
                
            </div>
            <div className="sign-upp">
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae omnis beatae reiciendis adipisci non, officiis provident,
                    aliquid itaque voluptas est pariatur, iste corporis. Quos hic
                saepe voluptatum deserunt inventore perferendis.</p>
                <div className="sign-up">
                    <Link to='/sign-up'>
                        <button className="btn1 btn-three">
                           Sign Up
                        </button>
                    </Link>
                
                </div>
            </div>
        </div>
    )
}

export default Section2
