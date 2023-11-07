import React, { useState } from "react";

import './flippingImgs.style.css'


export function FlippingImgs({ img1, img2 }) {

  const [move, setMove] = useState(true)

  setInterval(() => {
      setMove(prev => !prev)
  }, 5000)

  return (
    <div className={move ? 'images move' : 'images'}>
      <div class="images-inner">
        <div className="image-front">
          <img src={img1} alt="html" />
        </div>
        <div className="image-back" >
          <img src={img2} alt="css" />
        </div>
      </div>
    </div>
  );
}



