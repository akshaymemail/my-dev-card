import React, { useState } from 'react'
import './Project.css'

const Project = ({name, image, description, url, github}) => {
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth)
    window.addEventListener('resize', () => {
        setClientWidth(document.body.clientWidth)
    })
    return (
        <div id='project' className={clientWidth <= 992 ? '' : 'col-6'} >
            <div className="card m-1 p-1">
                <div className="row">
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL+image} alt={name} className="img-fluid"/>
                    </div>
                    <div className="col-6">
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>  
                </div>
                <a href={url} class="btn btn-outline-success mt-1">Visite</a>
                <a href={github} class="btn btn-outline-dark mt-2">GitHub</a>
            </div>
        </div>
    )
}

export default Project