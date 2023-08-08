import {useState, useEffect } from 'react';

import {BiLink, BiLogoGithub, BiLinkExternal} from 'react-icons/bi';

export const Projects = () => {

    const [data, setData] = useState([]);

    const getData = () =>{
        fetch('data.json', { headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((response) => {
            return response.json()
        }).then((projects) => {
            setData(projects);
        })
    }

    useEffect(() => {
        getData();
    }, []);


    
    return (

        <>
        {data && data.map((d) => (

        <div className='project'>
            <div className="image">
                <img src={d.img} alt=" project" />
                <BiLinkExternal className='img-icon' />
            </div>
            <div className="content">
                <h2 className='title'>{d.title}</h2>
                <p className="desc">{d.desc}</p>
                <p className="tech"> <span>Tech stack: </span>{d.tech}</p>
                <div className="links">
                    <div className="preview">
                        <BiLink className='project-icon' />
                        <a href={d.preview} target='_blank'>Live Preview</a>
                    </div>
                    <div className="code">
                        <BiLogoGithub className='project-icon' />
                        <a href={d.github}>Live Code</a>
                    </div>
                </div>
            </div>
        </div>

            ))
        }
</>

  )
}
