import React from 'react';
import './section1.css'
import section1 from './images/chess3.jpg';

function Section1() {
    return (
        <div className='section'>
            <div className="txt">
                <h1>Developers' Helping Hand</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas inventore veritatis vel, voluptate ipsa quam est
                quasi facilis sed modi amet magni at!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas inventore veritatis vel, voluptate ipsa quam est
                quasi facilis sed modi amet magni at!
                </p>
                <button className="btn1 btn-one">
                    Learn More
                </button>
                <button className="btn1 btn-two">
                    View On Github
                </button>
            </div>
            <div className="img">
                <img src={section1} alt="sec" width={600} height={400} />
            </div>
        </div>
    )
}

export default Section1