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


import {Heading} from './Heading';
import { Projects } from './Projects';


export const Home = () => {
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
        <div className="container">

            <div>
            <Heading title='My Tech Stack' subtitle=" Technologies I’ve been working with recently"/>
            </div>

            <div className="images">
                <img src={html} alt="html" />
                <img src={css} alt="html" />
                <img src={js} alt="html" />
                <img src={react} alt="html" />
                <img src={bootstrap} alt="html" />
                <img src={sass} alt="html" />
                <img src={typeScript} alt="html" />
                <img src={redux} alt="html" />
                <img src={git} alt="html" />
                <img src={vscode} alt="html" />
                <img src={github} alt="html" />
            </div>
        </div>

    </section>
    {/******** Skills Section Ends *********/}


    {/******** Projects Section Starts *********/}
    <section id="projects" className="projects">

        <div>
            <Heading title='My Tech Stack' subtitle=" Things I've built so far"/>
        </div>
        <div className="project-container">
            <Projects />
        </div>
        
    </section>
    {/******** Projects Section Ends *********/}

    </div>
  )
}
