import React from 'react'
import angular from '../components/images/logo192.png'
import html from '../components/images/html.png'
import sass from '../components/images/sass.png'
import js from '../components/images/js.png'
import css from '../components/images/css.png'
import './languages.css'

function Languages() {
    return (
        <div className="languages">
            <ul className="language-menu">
                <li className="language-item">
                    <img src={angular} alt="pic" height={90} width={90} />
                </li>
                <li className="language-item">
                    <img src={css} alt="pic" height={90} width={90}/>
                </li>
                <li className="language-item">
                    <img src={html} alt="" height={90} width={90}/>
                </li>
                <li className="language-item">
                    <img src={js} alt="" height={90} width={90}/>
                </li>
                <li className="language-item">
                    <img src={sass} alt="" height={90} width={90}/>
                </li>
            </ul>
            
        </div>
    )
}

export default Languages