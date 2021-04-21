import React from 'react'
import './Section.css'
import {Link} from 'react-router-dom'

const Section = () => {
    return (
        <div id='profileSection' >
            <div className="profileSectionItem">
                <Link to='/'><i className="fas fa-user"></i> About Me</Link>
            </div>
            <div className="profileSectionItem">
                <Link to='/portfolio' > <i className="fas fa-laptop-code"></i> Portfolio</Link>
            </div>
            <div className="profileSectionItem">
                <Link to='/resume' > <i className="fas fa-id-badge"></i> Resume</Link>
            </div>
            <div className="profileSectionItem">
                <Link to='/contact' > <i className="fas fa-id-card"></i> Contact</Link>
            </div>
            <div className="profileSectionItem">
                <a href='https://github.com/akshaymemail/my-dev-card' target='_blank' rel='noreferrer' > <i className="fab fa-github"></i> GitHub</a>
            </div>
            <button className='btn btn-dark'><i className="fas fa-paper-plane"></i> Hire Me !</button>
        </div>
    )
}

export default Section