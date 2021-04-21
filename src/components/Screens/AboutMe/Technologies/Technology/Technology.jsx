import React, { useState } from 'react'
import './Technology.css'

const Technology = ({icon, name, description}) => {
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth)
    window.addEventListener('resize', () => {
        setClientWidth(document.body.clientWidth)
    })
    return (
        <div id='technology' className= {clientWidth > 992 ? 'col-3' : clientWidth < 512 ?'col-12 text-center mt-2 ' : 'col-6'} >
            <i className={icon}></i>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Technology