<<<<<<< HEAD
=======
import React, { useState } from "react";
import './card.css'


export function Card({ tech, setIsPopupOpen }) {

  const [isCardOpen, setIsCardOpen] = useState([])


  function dropDown(name) {
    isCardOpen.includes(name) ? setIsCardOpen('') : setIsCardOpen(name)
  }

  function handlePopUpProjects() {
    setIsPopupOpen(tech.id)
  }


  return <div className="card">
    <div className="top" onClick={() => dropDown(tech.lg)}>
      {
        typeof tech.icon === 'object' ?
          <>
            <div className="image">
              <img src={tech.icon[0]} alt="html" />
              <h1>HTML</h1>
            </div>
            <div className="image">
              <img src={tech.icon[1]} alt="css" />
              <h1>CSS</h1>
            </div>
          </>
          :
          <div className="image">
            <img src={tech.icon} alt="html" />
            <h1>{tech.lg}</h1>
          </div>
      }

    </div>
    <div className={isCardOpen === tech.lg ? "bottom open" : "bottom"}>
      <div className="desc">
        <h2>Description</h2>
        <p>{tech.desc}</p>
      </div>
      <div className="proj">
        <h2>Projects</h2>
        <div className="single-project">
          <p>
            {tech.projects ?
              <>
                {tech.statement} <span onClick={handlePopUpProjects}> Clicking Here</span>
              </> 
              :
              <>
                {tech.statement}

                { tech.link && <a href={tech.link} rel="noreferrer" target='_blank' > Clicking Here</a>
                }
              </>}
          </p>
        </div>
      </div>
      <div className="certification">Certification</div>
    </div>
  </div>;
}
>>>>>>> skillspage
