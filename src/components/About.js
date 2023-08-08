import React from 'react'

import othman from '../assets/othman.png';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import react from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';
import sass from '../assets/sass.svg';
import git from '../assets/git.svg';
import vscode from '../assets/vscode.svg';
import github from '../assets/github.svg';

export const About = () => {
  return (
    <section className='about'>
        <div className="about-me">
            <h1>About Me</h1>
            <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
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
