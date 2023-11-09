import React from 'react'

import othman from '../assets/othman.png';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/javascript.svg';
import react from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';
import sass from '../assets/sass.svg';
import git from '../assets/git.svg';
import vscode from '../assets/vscode.svg';
import github from '../assets/github.svg';
import redux from '../assets/redux.svg';
import typeScript from '../assets/typescript.svg';
import npm from '../assets/npm.svg';
import nodejs from '../assets/nodejs.svg';
import express from '../assets/express.svg';


import { Heading } from '../components/Heading';
import { Projects } from '../components/ProjectsSection';
import { BsArrowRight, BsBoxArrowInUpRight, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';


 const HomePage = () => {
    return (
        <div id="home" className='home'>
            <section className="header">
                <div className="container">
                    <div className="content">
                        <h1>Hi 👋, <br /> My name is <br /> <span className="name">Othman Manneta</span> <br /> I am a Front-End Web Developer</h1>
                    </div>
                    <div className="image">
                        <img src={othman} alt="profile" />
                    </div>
                </div>
            </section>

            {/******** Skills Section *********/}
            <section id="skills" className="skills">
                <div className="skills-container">

                    <div>
                        <Heading title='My Tech Stack' subtitle=" Technologies I’ve been working with recently" />
                    </div>

                    <div className="images">
                        <img src={html} alt="html" />
                        <img src={css} alt="css" />
                        <img src={js} alt="js" />
                        <img src={react} alt="react" />
                        <img src={bootstrap} alt="bootstrap" />
                        <img src={sass} alt="sass" />
                        <img src={typeScript} alt="typescript" />
                        <img src={redux} alt="redux" />
                        <img src={git} alt="git" />
                        <img src={vscode} alt="vscode" />
                        <img src={github} alt="github" />
                        <img src={nodejs} alt="nodejs" />
                        <img src={express} alt="express" />
                        <img src={npm} alt="npm" />
                    </div>
                    <button className='discover-more'><Link to='/skills'>Discover more</Link><BsArrowRight /></button>
                </div>

            </section>
            {/******** Skills Section Ends *********/}


            {/******** Projects Section Starts *********/}
            <section id="projects" className="projects">

                <div>
                    <Heading title='My Tech Stack' subtitle=" Things I've built so far" />
                </div>
                <div className="project-container">
                    <Projects />
                </div>

                <div className="explore">
                    <Link to="/projects"><button>Projects ShowCase <BsBoxArrowInUpRight className='explor-icon' /></button></Link>
                    <Link to="https://github.com/Manneta-Othman?tab=repositories"><button>Projects Repositories <BsGithub className='explor-icon' /> </button></Link>
                </div>

            </section>
            {/******** Projects Section Ends *********/}

        </div>
    )
}


export default HomePage