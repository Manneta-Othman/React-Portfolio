import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';


export const Navbar = () => {

    const [path, setPath] = useState('/')

    const [show, setShow] = useState(false);

    useEffect(() => {
        function outSideClick() {
            setShow(false)
        }
        document.addEventListener('mousedown', outSideClick)
    })

    return (
        <nav className="navbar">
            <a className='logo' href="/">Manneta</a>

            <AiOutlineMenu id='menu-icon' onClick={() => setShow(prev => !prev)} />

            <ul className={show ? 'nav-links active' : 'nav-links'}>
                <Link to="/" onClick={() => setPath('/')} >
                    <li className={path === '/' ? 'active' : ''}>Home</li>
                </Link>
                <Link to="/about" onClick={() => setPath('/about')} >
                    <li className={path === '/about' ? 'active' : ''}>About</li>
                </Link>
                <Link to="/skills" onClick={() => setPath('/skills')} >
                    <li className={path === '/skills' ? 'active' : ''}>Teck Stack</li>
                </Link>
                <Link to="/projects" onClick={() => setPath('/projects')} >
                    <li className={path === '/projects' ? 'active' : ''}>Projects</li>
                </Link>
                <Link to="/contact" onClick={() => setPath('/contact')} >
                    <li className={path === '/contact' ? 'active' : ''}>Contact</li>
                </Link>

                <div className="nav-icons">
                    <Link to="https://github.com/Manneta-Othman" target='_blank' rel="noreferrer" className="github"> <BsGithub className='icon' /> </Link>
                    <Link to="https://www.linkedin.com/in/othman-manneta-504293204/" rel="noreferrer" target='_blank' className="linkedin"> <BsLinkedin className='icon' /> </Link>
                </div>
            </ul>

        </nav>
    )
}
