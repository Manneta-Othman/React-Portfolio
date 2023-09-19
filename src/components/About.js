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

export const About = () => {
  return (
    <section className='about'>
        <div className="about-me">
            <div className="image">
              <img src={othman} alt="My profile" />
            </div>
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
