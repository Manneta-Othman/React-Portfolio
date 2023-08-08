import React from 'react'

import {BsGithub, BsLinkedin} from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className='container'>
        <div className="footer-top">
                <a href="/" className='logo'>Manneta</a>
            <div className="contact">
                <p>+21249932423</p>
                <p>Othman.Manneta@gmail.com</p>
                
                <div className="icons">
                    <a href="https://github.com/Manneta-Othman"><BsGithub className='icon' /></a> 
                    <a href="https://www.linkedin.com/in/othman-manneta-504293204/"><BsLinkedin className='icon' /></a>
                </div>
                
            </div>
        </div>

        <div className='line'></div>

        <div className="footer-bottom">
            <div className="bottom-left">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Teck Stack</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="bottom-right">
                <p>Designed and built by Pavan MG with Love & Coffee</p>
            </div>
        </div>
    </div>
  )
}
