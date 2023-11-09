<<<<<<< HEAD
=======
import './pop-up.style.css'

import closeICon from '../assets/close-icon.svg'
import { useEffect, useState } from 'react';


export function PopUp({ isPopupOpen, setIsPopupOpen }) {


  const [tech, setTech] = useState();
  const [projectNum, setProjectNum] = useState(0)

  const getSkills = () => {
    fetch('/skills.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((skills) => {
      setTech(skills.find(s => s.id === isPopupOpen));
    })
  }
  useEffect(() => {
    getSkills();

    // eslint-disable-next-line
  }, [isPopupOpen]);


  return (
    <div className={isPopupOpen ? "popup open" : "popup"}>
      {tech?.projects &&
        (<div className="popup-container">
          <img src={closeICon} alt="" onClick={() => setIsPopupOpen('')} />
          <div className="project-media">
            {
              tech.projects?.map((p, index) => (
                <>
                  <video
                    key={p.projectThumb}
                    controls
                    className={projectNum === index ? 'active' : ''}
                    >
                    <source src={p.projectVideo} type="video/mp4" />
                  </video>
                </>
              ))
            }
          </div>
          <div className="projects-list">
            {
              tech.projects?.map((p, index) => (
                <div
                  key={p.projectVideo}
                  className={projectNum === index ? "project-item selected" : "project-item"}
                  onClick={() => setProjectNum((index))}
                >
                  <img src={p.projectThumb} alt={p.projectName} />
                </div>
              ))
            }
          </div>
        </div>)
      }

    </div>
  );
}
>>>>>>> skillspage
