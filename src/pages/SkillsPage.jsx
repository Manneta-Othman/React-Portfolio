<<<<<<< HEAD
=======
import { Card } from './../components/card';
import React, { useEffect, useState } from 'react'
import { Heading } from '../components/Heading'
import './skills-page.style.css'
import { PopUp } from '../components/PopUp';




export default function SkillsPage() {

  const [tech, setTech] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(null)

  const getSkills = () => {
    fetch('skills.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((skills) => {
      setTech(skills);
    })
  }

  useEffect(() => {
    getSkills();
  }, []);


  return (
    <section>
      <div className="skills-page-container">
        <Heading title='My Tech Skills' />

        <h2>Introduction:</h2>
        <p className='skills-intro'> Hello there! 👋 I'm Othman Manneta, a passionate front-end web developer on a mission to transform creative ideas into captivating digital experiences. I've curated this space to showcase my technical prowess, inviting potential employers into my world of web development wizardry.</p>

        <div className="cards-container">
          {
            tech && tech.map(t => (
              <Card key={t.id} tech={t} setIsPopupOpen={setIsPopupOpen} />
            ))
          }
        </div>
        <PopUp
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />
      </div>
    </section>
  )
}
>>>>>>> skillspage
