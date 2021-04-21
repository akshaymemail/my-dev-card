import React, { useState } from 'react'
import './Resume.css'
import avatar from '../../../images/profile/avatar.jpg'
import ResumeProjects from './ResumeProjects/ResumeProjects'
import projects from '../../../lib/projects'

const Resume = () => {
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth)
    window.addEventListener('resize', () => {
        setClientWidth(document.body.clientWidth)
    })
    return (
        <div id='resume'>
            <div className="heading text-center">
                <h1>Online Resume</h1>
                <a className='btn btn-success' href="/files/resume.pdf" download='akshay.pdf' ><i class="fas fa-file-pdf"></i>  Download Resume</a>
            </div>

            <div className="resume">
                <div className="row">
                    <div className={clientWidth < 720 ? 'col-12' : 'col-8'}>
                        <h1 className='text-success' >AKSHAY KUMAR SINGH</h1>
                        <p>MERN Stack Enginner</p>
                    </div>
                    <div className={clientWidth < 790 ? 'col-12' : 'col-4'}>
                        <p> <i className="fas fa-phone"></i> :- +918271097843 </p>
                        <p> <i className="fas fa-envelope"></i> :- akshaymemail@gmail.com</p>
                        <p> <i className="fas fa-map-marker"></i> :- Meerut, UP || Chapra, BI</p>
                    </div>
                </div>
                <hr/>
                <div className="info row align-items-center">
                    <div className={clientWidth < 720 ? 'col-12 text-center ' : 'col-3'}>
                        <img src={avatar} alt="akshay singh" />
                    </div>
                    <div className={clientWidth < 720 ? 'col-12 text-center ' : 'col-9'}>
                    I'm a MERN Stack Developer in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className={clientWidth < 888 ? 'col-12' : 'col-8'}>
                        <div className="experience">
                            <div className="vrLine">
                                <h4> Work Experience</h4>
                            </div>
                            <p>Freelancer / Personal Experience</p>
                        </div>
                        <div className="projects">
                            <div className="vrLine">
                                <h4>Projects</h4>
                            </div>
                            {
                                projects.map((project, index) => <ResumeProjects key={index} name={project.name} github={project.github} description={project.description} />)
                            }
                        </div>
                    </div>
                    <div className={clientWidth < 888 ? 'col-12' : 'col-4'}>
                        <div  className={clientWidth < 888 ? '' : 'vrHr'}>
                            <div className="skills">
                                <div className="vrLine">
                                <h4 className='text-success' >Skills</h4>
                                </div>
                                <span>JavaScript/React.js</span><br/>
                                <span>Node.js/PHP</span><br/>
                                <span>MySQL/MongoDB</span><br/>
                                <span>MONGODB, MYSQL</span><br/>
                                <span>Object-oriented design</span><br/>
                            </div>
                            <div className="education">
                                <div className="vrLine">
                                <h4 className='text-success' >Education</h4>
                                </div>
                                <h5>BCA (2017 - 2020)</h5>
                                <span>CCS University Meerut, UP</span>
                            </div>
                            <div className="languages">
                                <div className="vrLine">
                                <h4 className='text-success' >Languages</h4>
                                </div>
                                <span>English/Hindi/Bhojpuri</span>
                            </div>
                            <div className="interestes">
                                <div className="vrLine">
                                <h4 className='text-success' >Interestes</h4>
                                </div>
                                <span>Travling/Cricket</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume