import React from 'react'


import { Heading } from '../components/Heading';
import { Projects } from '../components/ProjectsSection';
import { BsBoxArrowInUpRight, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProfileSkillsAnimation from '../animations/ProfileSkillsAnimation';
import SkillsSection from '../homeSections/SkillsSection';


const HomePage = () => {

    function goTo(link) {
        window.location.href = `/${link}`;
    }

    return (
        <div id="home" className='home'>
            <section className="header">
                <div className="container">
                    <div className="content">
                        <h1>Hi 👋, <br /> My name is <br /> <span className="name">Othman Manneta</span> <br /> I am a Front-End Web Developer</h1>
                    </div>
                    <ProfileSkillsAnimation />
                </div>
            </section>

            {/******** Skills Section *********/}

            <SkillsSection />

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