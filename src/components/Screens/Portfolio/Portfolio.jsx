import React from 'react'
import './Portfolio.css'
import Spacs from '../../Space/Space'
import projects from '../../../lib/projects'
import Project from '../AboutMe/Featured/Project/Project'
const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="portfolio">
                <h1>PortFolio</h1>
                <p>Welcome to my online portfolio. I'm taking on freelance work at the moment. Want some help building your software?</p>
                <button className='btn btn-success' ><i className="fas fa-paper-plane"></i> Hire Me</button>
            </div>
            <Spacs />
            <div className="row">
            {
                projects.map((project, index) => <Project key={index} name={project.name} image={project.image} description={project.description} url={project.url} github={project.github} />)
            }
            </div>
        </div>
    )
}

export default Portfolio