import React, { useEffect, useState } from 'react'
import { Heading } from '../components/Heading';
import { SingleProject } from '../components/SingleProject';
import './projects-page.style.css'
import { Intro } from '../components/intro';

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

        <Intro text="Welcome to my projects page, a curated collection of my endeavors in the world of web development. Each project is a testament to my dedication and creativity. Feel free to browse through and witness the fusion of code and design. If you have any questions or feedback, don't hesitate to reach out." />

        <div className="projects-container">
          {
            data && data.map(d => (
              <SingleProject key={d.id} data={d} />
            ))
          }
        </div>

      </div>
    </section>
  )
}
