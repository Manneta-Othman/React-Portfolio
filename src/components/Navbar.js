import React, { useState } from 'react'

import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';


export const Navbar = () => {

        const [show, setShow] = useState(false);
        
  return (
        <nav class="navbar">
            <a className='logo' href="/">Manneta</a>

            <AiOutlineMenu id='menu-icon' onClick={() => setShow(!show)}/>

            <ul className={show ? 'nav-links active' : 'nav-links'}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/#skills">Teck Stack</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>

                <div className="nav-icons">
                    <a href="https://github.com/Manneta-Othman" target='_blank' className="github"> <BsGithub class='icon' /> </a>
                    <a href="https://www.linkedin.com/in/othman-manneta-504293204/" target='_blank' className="linkedin"> <BsLinkedin class='icon' /> </a>
                </div>
            </ul>

        </nav>
  )
}
