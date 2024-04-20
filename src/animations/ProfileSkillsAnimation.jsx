import React, { useEffect, useState } from 'react'
import './profileskillsanimation.style.css'
import othman from '../assets/othman.png';

import html from '../assets/html.svg';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import typescript from '../assets/typescript.svg';
import sass from '../assets/sass.svg';
import bootstrap from '../assets/bootstrap.svg';
import redux from '../assets/redux.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import npm from '../assets/npm.svg';
import nodejs from '../assets/nodejs.svg';
import express from '../assets/express.svg';
import mongodb from '../assets/mongodb.svg';
import reactnative from '../assets/reactnative.svg';



export default function profileSkillsAnimation() {

  const [animation, setAnimation] = useState(false);

  const skills = [html, css, javascript, react, typescript, redux, sass, bootstrap, git, github, npm, nodejs, express, mongodb, reactnative]

  const activeSkullAnimation = (index) => {
    return ({
      transform: `rotate(calc(360deg / ${skills.length} * ${index + 1} ))`,
      transitionDelay: `calc(0.1s * ${index + 1})`,
    })
  }

  const SkullAnimation = (index) => {
    return ({
      transform: `rotate(calc(0deg)) translateX(150px)`,
      transitionDelay: `calc(0.1s * ${index + 1})`
    })
  }

  const imgStyle = (index) => {
    return ({
      transform: `rotate(calc(-360deg / ${skills.length} * ${index + 1} ))`
    })
  }

  useEffect(() => {
    setAnimation(true)
  }, [])

  return (

    <div className="circle">
      <div className="profilepctr">
        <img src={othman} alt="profile picture" onClick={() => setAnimation(q => !q)} />
      </div>
      {
        skills && skills.map((s, index) => (
          <div className={animation ? "skll active" : "skll"}
            key={index}
            style={
              animation ? activeSkullAnimation(index) : SkullAnimation(index)
            }>
            <div className="skllImage">
              <img src={s} style={imgStyle(index)} />
            </div>

          </div>
        ))
      }
    </div>
  )
}
