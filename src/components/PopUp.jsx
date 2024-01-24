
import './pop-up.style.css'

import { useEffect, useMemo, useRef, useState } from 'react';


function PopUp({ isPopupOpen, setIsPopupOpen }) {


  const [tech, setTech] = useState();
  const [projectNum, setProjectNum] = useState(0)
  const videoPlayer = useRef()
  const popupRef = useRef()

  // fetch the skills from the APi
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

  // get the specific skill in accordance whith user's choice
  const skill = useMemo(() => {
    setProjectNum(0)
    return tech?.find(t => t.id === isPopupOpen)
  }, [tech, isPopupOpen])

  // Set the selected project whenever changes
  const projectShown = useMemo(() => {
    return skill?.projects[projectNum].projectVideo
  }, [skill, projectNum])

  // Close Pop Up container when clicking outside
  useEffect(() => {
    function outSideClick(e) {
      if (isPopupOpen == null && !popupRef.current?.contains(e.target)) {
        setIsPopupOpen(null)
      }
    }
    document.addEventListener('mousedown', outSideClick)
  })

  return (
    <div className={isPopupOpen ? "popup open" : "popup"} >
      {skill?.projects &&
        (<div className="popup-container" ref={popupRef}>
          <div className="project-media">
            {
              <>
                <iframe
                  key={skill.id}
                  controls
                  className='active'
                  ref={videoPlayer}
                  src={projectShown} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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


export default PopUp