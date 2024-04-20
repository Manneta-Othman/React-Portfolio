import React, { useEffect, useState } from "react";

import './flippingImgs.style.css'


export function FlippingImgs({ front, back, index, column, imgWithGap, setSkillsSectionBorders, startSkillsSectionAnimation }) {

  startSkillsSectionAnimation && 
    setTimeout(() => {
      setAnimation(true)
    }, (index * 1000))
  

  const [animation, setAnimation] = useState(false)


  useEffect(() => {
    setSkillsSectionBorders(window.innerHeight)
  }, [setSkillsSectionBorders])

  



  const x = Math.floor(index - (column * Math.floor(index / column))) * imgWithGap;
  const y = Math.floor(index / column) * imgWithGap


  return (

    <div className={animation ? 'flip-card active' : 'flip-card'} style={animation ? { left: x, top: y } : { left: 0, top: 0 }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={front} alt="html" />
        </div>
        <div className="flip-card-back" >
          <img src={back} alt="css" />
        </div>
      </div>
    </div>
  );
}



