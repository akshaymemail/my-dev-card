import React from 'react'
import './ResumeProjects.css'

const ResumeProjects = ({name, github, description}) => {
    return (
        <div id='resumeProjects'>
            <div className='row' >
                <div className="col-8">
                    <h5>{name}</h5>
                </div>
                <div className="col-3 text-end ">
                    <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ResumeProjects