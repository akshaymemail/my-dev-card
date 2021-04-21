import React, { useState } from 'react'
import './Showcase.css'
import coverImage from '../../../../images/aboutMe/cover.jpg'
import { Link } from 'react-router-dom'
const Showcase = () => {
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth)
    window.addEventListener('resize', () => {
        setClientWidth(document.body.clientWidth)
    })
    return (
        <div id='showcase'>
            <div className="row">
                <div className={clientWidth < 992 ? 'col-12' : 'col-8'}>
                    <h2 className="font-weight-bold" >AKSHAY KUMAR SINGH</h2>
                    <h5 className="font-italic" >MERN Stack Engineer</h5>
                    <p>I'm a MERN Stack Developer in frontend and backend development for complex scalable web apps. I write about software development on <a href='https://blog.akshaymemail.com' className='text-success hover-underline' target="_blank" rel='noreferrer' >my blog</a>. Want to know how I may help your project? Check out my project <Link to ="/portfolio" className='text-success hover-underline' >portfolio</Link> and online <Link to='/resume' className='text-success hover-underline' >resume</Link>.</p>
                    <div className={clientWidth < 720 && 'text-center'}>
                        <Link to='/portfolio' className='btn btn-success ' >
                             <i class="far fa-arrow-alt-circle-right"></i> View Portfolio
                        </Link>
                        <Link to='/resume' className='btn btn-outline-dark m-3' >
                             <i class="fas fa-file-alt"></i> View Resume
                        </Link>
                    </div>
                </div>
                <div className={clientWidth < 992 ? 'col-12 text-center' :'col-4'}>
                    <img src={coverImage} alt="akshay singh" className={clientWidth < 992 ? 'img-fluid rounded small-img' : 'img-fluid rounded'} />
                </div>
            </div>
        </div>
    )
}

export default Showcase