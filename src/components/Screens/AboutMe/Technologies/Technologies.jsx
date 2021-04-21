import React from 'react'
import technologies from '../../../../lib/technologies'
import './Technologies.css'
import Technology from './Technology/Technology'

const Technologies = () => {
    return (
        <div id='technologies' className='row' >
            {
                technologies.map((technology, index) => <Technology key={index} icon={technology.icon} name={technology.name} description={technology.description} /> )
            }  
        </div>
    )
}

export default Technologies