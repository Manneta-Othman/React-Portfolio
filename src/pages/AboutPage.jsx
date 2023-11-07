import React from 'react'

import othman from '../assets/othman.png';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/javascript.svg';
import react from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';
import sass from '../assets/sass.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import redux from '../assets/redux.svg';
import typeScript from '../assets/typescript.svg';
import npm from '../assets/npm.svg';
import nodejs from '../assets/nodejs.svg';
import mongodb from '../assets/mongodb.svg';
import express from '../assets/express.svg';
import next from '../assets/next.png';


export function About() {
  return (
    <section className='about'>
        <div className="about-me">
            <div className="image">
              <img src={othman} alt="My profile" />
            </div>
            <h1>About Me</h1>
            <p>Hello! I'm Othman Manneta, and I'm embarking on a journey to excel as a front-end developer. While my professional experience may not be extensive, my enthusiasm for mastering the art of web development knows no bounds.</p>
            <br/>
            <p>My journey commenced with rigorous self-study and comprehensive online courses, through which I solidified my foundation in core technologies like HTML, CSS, and JavaScript. Additionally, I've eagerly expanded my skill set to encompass a wide range of tools and frameworks, including React, TypeScript, Bootstrap, Sass, Git, and more. These skills have found practical application in a variety of projects that I've meticulously crafted, all showcased in my portfolio.</p>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <div className="container">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
                <img src={react} alt="react" />
                <img src={bootstrap} alt="bootstrap" />
                <img src={sass} alt="sass" />
                <img src={typeScript} alt="typeScript" />
                <img src={redux} alt="redux" />
                <img src={git} alt="git" />
                <img src={github} alt="github" />
                <img src={nodejs} alt="nodejs" />
                <img src={mongodb} alt="mongodb" />
                <img src={express} alt="express" />
                <img src={npm} alt="npm" />
                <img src={next} alt="next" />
            </div>
        </div>
    </section>
  )
}
