import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
    return (
        <div id="contact">
                <div className="text-center mt-5 container">
                <h1>Contact Me</h1>
                <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below <br/> or send me an email to akshaymemail@gmail.com</p>
                <p className='mt-2 mb-2' >Want to get connected? Follow me on the social channels below.</p>
                <div className="icons">
                    <a className='text-success' target='_blank' rel='noreferrer' href="https://github.com/akshaymemail"><i className="fab fa-github"></i></a>
                    <a className='text-success' target='_blank' rel='noreferrer' href="https://stackoverflow.com/users/11280677/akshay-kumar"> <i className="fab fa-stack-overflow"></i> </a>
                    <a className='text-success' target='_blank' rel='noreferrer' href="https://facebook.com/aksc.me"><i className="fab fa-facebook"></i></a>
                    <a className='text-success' target='_blank' rel='noreferrer' href="https://instagram.com/akshaymemail"> <i className="fab fa-instagram"></i> </a>
                    <a className="text-success" target='_blank' rel='noreferrer' href="https://wa.me/918271097843?text='hi Akshay!"> <i className="fab fa-whatsapp"></i> </a>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact