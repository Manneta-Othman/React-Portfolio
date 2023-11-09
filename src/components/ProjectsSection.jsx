<<<<<<< HEAD
=======
import { SingleProject } from './SingleProject';
import {useState, useEffect } from 'react';


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
        {data && data.slice(0,3).map(d => (

            <SingleProject data={d}  />

            ))
        }
</>

  )
}
>>>>>>> skillspage
