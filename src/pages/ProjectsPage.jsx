import React, { useEffect, useState } from 'react'
import { Heading } from '../components/Heading';
import { SingleProject } from '../components/SingleProject';

export default function ProjectsPage() {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then((projects) => {
      setData(projects);
    })
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <section>
      <div className="projects-page">
        <Heading title='My Projects Showcase' />

        <div className="projects-container">
          {
            data && data.map(d => (
              <SingleProject data={d} />
            ))
          }
        </div>

      </div>
    </section>
  )
}
