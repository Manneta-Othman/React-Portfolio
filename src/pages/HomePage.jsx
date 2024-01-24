import React, { useEffect, useState } from 'react'

import othman from '../assets/othman.png';

import { Heading } from '../components/Heading';
import { Projects } from '../components/ProjectsSection';
import { BsArrowRight, BsBoxArrowInUpRight, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const HomePage = () => {

    const [skills, setSkills] = useState([]);

    const getSkills = () => {
        fetch('skills.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setSkills(data);
        })
    }

    useEffect(() => {
        getSkills();
    }, []);


    function goTo(link) {
        console.log(link);
        window.location.href = `/${link}`;
    }

    return (
        <div id="home" className='home'>
            <section className="header">
                <div className="container">
                    <div className="content">
                        <h1>Hi 👋, <br /> My name is <br /> <span className="name">Othman Manneta</span> <br /> I am a Front-End Web Developer</h1>
                    </div>
                    <div className="image">
                        <img src={othman} alt="profile" />
                    </div>
                </div>
            </section>

            {/******** Skills Section *********/}
            <section id="skills" className="skills">
                <div className="skills-container">

                    <div>
                        <Heading title='My Tech Stack' subtitle=" Technologies I’ve been working with recently" />
                    </div>

                    <div className="images">
                        {
                            skills && skills.map(skill => (
                                typeof skill.icon === 'object' ?
                                    (
                                            <div className='html-css' key={skill.id}>
                                                <img src={skill.icon[0]} alt={skill.lg} />
                                                <img src={skill.icon[1]} alt={skill.lg} />
                                            </div>
                                    )
                                    :
                                    (
                                        <img key={skill.id} src={skill.icon} alt={skill.lg} />
                                    )
                            ))
                        }
                    </div>
                    <button className='discover-more' onClick={() => goTo('skills')}>Discover more<BsArrowRight /></button>
                </div>

            </section>
            {/******** Skills Section Ends *********/}


            {/******** Projects Section Starts *********/}
            <section id="projects" className="projects">
                <div>
                    <Heading title='My Tech Stack' subtitle=" Things I've built so far" />
                </div>
                <div className="project-container">
                    <Projects />
                </div>

                <div className="explore">
                    <button onClick={() => goTo('projects')}>Projects ShowCase <BsBoxArrowInUpRight className='explor-icon' /></button>
                    <Link to="https://github.com/Manneta-Othman?tab=repositories"><button>Projects Repositories <BsGithub className='explor-icon' /> </button></Link>
                </div>

            </section>
            {/******** Projects Section Ends *********/}

        </div>
    )
}


export default HomePage