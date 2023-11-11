
import './pop-up.style.css'

import closeICon from '../assets/close-icon.svg'
import { useEffect, useMemo, useRef, useState } from 'react';


export function PopUp({ isPopupOpen, setIsPopupOpen }) {


  const [tech, setTech] = useState();
  const [projectNum, setProjectNum] = useState(0)
  const videoPlayer = useRef()

  const getSkills = () => {
    fetch('/skills.json', {
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
    getSkills()
  }, []);


  const skill = useMemo(() => {
    setProjectNum(0)
    return tech?.find(t => t.id === isPopupOpen)
  }, [tech, isPopupOpen])


  const projectShown = useMemo(() => {
    videoPlayer.current?.load()
    return skill?.projects[projectNum].projectVideo
  }, [skill, projectNum])




console.log(projectShown)
  return (
    <div className={isPopupOpen ? "popup open" : "popup"}>
      {skill?.projects &&
        (<div className="popup-container">
          <img src={closeICon} alt="" onClick={() => setIsPopupOpen('')} />
          <div className="project-media">
            {
                <>
                  <video
                    key={skill.id}
                    controls
                    className='active'
                    ref={videoPlayer}
                    >
                    <source src={projectShown} type="video/mp4" />
                  </video>
                </>
            }
          </div>
          <div className="projects-list">
            {
              skill.projects?.map((p, index) => (
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
