import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../../../../lib/projects'
import './Featured.css'
import Project from './Project/Project'

const Featured = () => {
    return (
        <div id='featured'>
            <div className="vrLine">
                <h2>Featured Projects</h2>
            </div>
            <div className="row">
            {
                projects.map((project, index) => <Project key={index} name={project.name} image={project.image} description={project.description} url={project.url} github={project.github} />  )
            }
            <div style={{textAlign : 'center'}} className="mt-3">
            <Link style={{width : 'fit-content'}} to='/portfolio' className='btn btn-success' >
                <i class="far fa-arrow-alt-circle-right"></i> View Portfolio
            </Link>
            </div>
            </div>
        </div>
        
    )
}

export default Featured