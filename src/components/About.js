import React from 'react'

import othman from '../images/othman.png';
import html from '../images/html.svg';
import css from '../images/css.svg';
import js from '../images/js.svg';
import react from '../images/react.svg';
import bootstrap from '../images/bootstrap.svg';
import sass from '../images/sass.svg';
import git from '../images/git.svg';
import vscode from '../images/vscode.svg';
import github from '../images/github.svg';

export default function About() {
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
                <img src={css} alt="html" />
                <img src={js} alt="html" />
                <img src={react} alt="html" />
                <img src={bootstrap} alt="html" />
                <img src={sass} alt="html" />
                <img src={git} alt="html" />
                <img src={vscode} alt="html" />
                <img src={github} alt="html" />
            </div>
        </div>
    </section>
  )
}
