import React, { useEffect, useState } from 'react'

import othman from '../assets/othman.png';


export default function AboutPage() {

  const [tech, setTech] = useState();


  // fetch the skills from the APi
  const getSkills = () => {
    fetch('/skills.json')
      .then((response) => {
        return response.json()
      }).then((skills) => {
        setTech(skills);
      })
  }
  useEffect(() => {
    getSkills()
  }, []);

  return (
    <section className='about'>
      <div className="about-me">
        <div className="image">
          <img src={othman} alt="My profile" />
        </div>
        <h1>About Me</h1>
        <div className="about-text">
          <p>Hello! I'm Othman Manneta, and I'm embarking on a journey to excel as a front-end developer. While my professional experience may not be extensive, my enthusiasm for mastering the art of web development knows no bounds.</p>
          <br />
          <p>My journey commenced with rigorous self-study and comprehensive online courses, through which I solidified my foundation in core technologies like HTML, CSS, and JavaScript. Additionally, I've eagerly expanded my skill set to encompass a wide range of tools and frameworks, including React, TypeScript, Bootstrap, Sass, Git, and more. These skills have found practical application in a variety of projects that I've meticulously crafted, all showcased in my portfolio.</p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="container">
          {tech && tech.map((t, index) => (
            typeof t.icon === 'string' ?
              <div className="imageContainer" key={index}>
                <img src={t.icon} alt={t.lg} key={t.id} />
              </div>
              :
              t.icon.map((i, index) => (
                <div className="imageContainer" key={index}>
                  <img src={i} alt={t.lg} key={Math.random()} />
                </div>
              ))
          ))}
        </div>
      </div>
    </section>
  )
}
