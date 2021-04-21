import React from 'react'
import { Link } from 'react-router-dom'
import './WhatIDo.css'

const WhatIDo = () => {
    return (
        <div id='whatIDo'>
            <div className="vrLine">
                <h2>What I do </h2>
            </div>
            <p>
                I have more than 1 years of experience building software for clients. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online <Link to='/resume' className='text-success hover-underline' >resume</Link> and <Link to ="/portfolio" className='text-success hover-underline' >project portfolio</Link>.
            </p>
        </div>
    )
}

export default WhatIDo