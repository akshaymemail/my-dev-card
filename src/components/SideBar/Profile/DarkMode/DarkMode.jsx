import React from 'react'
import './DarkMode.css'

const DarkMode = () => {
    return (
        <div id='darkMode'>
            <h5> <i className="fas fa-adjust"></i> Dark Mode</h5>
            <div  className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
        </div>
    )
}

export default DarkMode