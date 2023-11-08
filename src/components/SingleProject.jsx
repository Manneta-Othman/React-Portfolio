import React from "react";

import {BiLink, BiLogoGithub, BiLinkExternal} from 'react-icons/bi';


export function SingleProject({data}) {


  return <div className='project' key={data.id}>
            <div className="image">
                <img src={data.img} alt=" project" />
                <BiLinkExternal className='img-icon' />
            </div>
            <div className="content">
                <h2 className='title'>{data.title}</h2>
                <p className="desc">{data.desc}</p>
                <p className="tech"> <span>Tech stack: </span>{data.tech}</p>
                <div className="links">
                    <div className="preview">
                        <BiLink className='project-icon' />
                        <a href={data.preview} target='_blank' rel="noreferrer">Live Preview</a>
                    </div>
                    <div className="code">
                        <BiLogoGithub className='project-icon' />
                        <a href={data.github}>Live Code</a>
                    </div>
                </div>
            </div>
        </div>;
}
  