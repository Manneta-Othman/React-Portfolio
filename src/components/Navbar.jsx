import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';


export const Navbar = () => {

    const [path, setPath] = useState(window.location.pathname)
    const menuRef = useRef()

    const [show, setOpenMenu] = useState(false);


    useEffect(() => {

        function clickOutside(e) {
            if (!menuRef.current.contains(e.target)) {
                setOpenMenu(false)
            }

        }

        document.addEventListener('mousedown', clickOutside)

    })


    return (
        <nav className="navbar" ref={menuRef}>
            <a className='logo' href="/">Manneta</a>

            <div className="icon" onClick={() => setOpenMenu(prev => !prev)}>
                <AiOutlineMenu id='menu-icon' />
            </div>

            <ul className={show ? 'nav-links active' : 'nav-links'}>
                <Link to="/">
                    <li
                        className={path === '/' ? 'active' : ''}
                        onClick={() => setPath('/')}
                    > Home </li>
                </Link>

                <Link to="/about">
                    <li
                        className={path === '/about' ? 'active' : ''}
                        onClick={() => setPath('/about')}
                    > About </li>
                </Link>
                <Link to="/skills">
                    <li
                        className={path === '/skills' ? 'active' : ''}
                        onClick={() => setPath('/skills')}
                    > Teck Stack </li>
                </Link>
                <Link to="/projects">
                    <li
                        className={path === '/projects' ? 'active' : ''}
                        onClick={() => setPath('/projects')}
                    > Projects </li>
                </Link>
                <Link to="/contact">
                    <li
                        className={path === '/contact' ? 'active' : ''}
                        onClick={() => setPath('/contact')}
                    > Contact </li>
                </Link>


                <div className="nav-icons">
                    <Link to="https://github.com/Manneta-Othman" target='_blank' rel="noreferrer" className="github"> <BsGithub className='icon' /> </Link>
                    <Link to="https://www.linkedin.com/in/othman-manneta-504293204/" rel="noreferrer" target='_blank' className="linkedin"> <BsLinkedin className='icon' /> </Link>
                </div>
            </ul>

        </nav>
    )
}
