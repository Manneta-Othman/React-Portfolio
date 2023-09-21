import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';


export const Navbar = () => {

        const [show, setShow] = useState(false);
        
  return (
        <nav className="navbar">
            <a className='logo' href="/">Manneta</a>

            <AiOutlineMenu id='menu-icon' onClick={() => setShow(prev => !prev)}/>

            <ul className={show ? 'nav-links active' : 'nav-links'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/#skills">Teck Stack</Link></li>
                <li><Link to="/#projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>

                <div className="nav-icons">
                    <Link to="https://github.com/Manneta-Othman" target='_blank' rel="noreferrer" className="github"> <BsGithub className='icon' /> </Link>
                    <Link to="https://www.linkedin.com/in/othman-manneta-504293204/" rel="noreferrer" target='_blank' className="linkedin"> <BsLinkedin className='icon' /> </Link>
                </div>
            </ul>

        </nav>
  )
}
