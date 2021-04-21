import React from 'react'
import './Social.css'

const Social = () => {
    return (
        <div id='social'>
            <a href="https://github.com/akshaymemail" rel='noreferrer' target='_blank' >
                <i className="fab fa-github"></i>
            </a>
            <a href="https://facebook.com/aksc" rel='noreferrer' target='_blank' >
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/akshaymemail" rel='noreferrer' target='_blank' >
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=918271097843&text=Hi!%20Akshay" rel='noreferrer' target='_blank' >
                <i className="fab fa-whatsapp"></i>
            </a>
            <a href="tel:+918271097843" rel='noreferrer' target='_blank' >
                <i className="fas fa-phone"></i>
            </a>
        </div>
    )
}

export default Social