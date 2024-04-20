import React, { useEffect, useRef, useState } from 'react'
import './skills-section.css'
import { BsArrowRight } from 'react-icons/bs';


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
import logo from '../assets/manneta-logo.png';
import { FlippingImgs } from '../animations/FlippingImgs';
import { Heading } from '../components/Heading';


export default function SkillsSection() {

  const skills = [html, css, javascript, react, typescript, redux, sass, bootstrap, git, github, npm, nodejs, express, mongodb, reactnative];

  const imageContainerWidth = useRef(0);

  const [column, setColumn] = useState(2);
  const row = skills.length / column;

  const imgSize = 80;
  const imgsGap = 70;

  const skillsContainerWidth = (Math.ceil(column) * imgSize) + (Math.ceil(column - 1) * imgsGap) + 'px';
  const skillsContainerHeight = (Math.ceil(row) * (imgSize + imgsGap)) - 30 + 'px';

  const [skillsSectionBorders, setSkillsSectionBorders] = useState()
  const [startSkillsSectionAnimation, setStartSkillsSectionAnimation] = useState(false)



  skillsSectionBorders && (
    window.onscroll = () => {
      window.scrollY >= skillsSectionBorders ? setStartSkillsSectionAnimation(true) : setStartSkillsSectionAnimation(true)
    }
  )


  useEffect(() => {
    window.innerWidth > 1400 && setColumn(6);
    (window.innerWidth > 1050 && window.innerWidth < 1400) && setColumn(5);
    (window.innerWidth > 850 && window.innerWidth < 1050) && setColumn(4);
    (window.innerWidth > 450 && window.innerWidth < 850) && setColumn(3);
    window.innerWidth < 450 && setColumn(2);
  }, [])

  function goTo(link) {
    window.location.href = `/${link}`;
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div>
          <Heading title='My Tech Stack' subtitle=" Technologies I’ve been working with recently" />
        </div>

        <div className="images" ref={imageContainerWidth} style={{ width: skillsContainerWidth, height: skillsContainerHeight }}>
          {
            skills && skills.map((s, index) => (
              <FlippingImgs
                front={logo}
                back={s}
                index={index}
                column={column}
                imgWithGap={imgSize + imgsGap}
                key={index}
                setSkillsSectionBorders={setSkillsSectionBorders}
                startSkillsSectionAnimation={startSkillsSectionAnimation}
              />
            ))
          }
        </div>

        <button className='discover-more' onClick={() => goTo('skills')}>Discover more<BsArrowRight /></button>
      </div>

    </section>
  )
}
