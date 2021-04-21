import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!name || !email || !message){
            alert('All fields are mandatory!')
        } else {
            setIsSubmitted(true)
        }
    }
    return (
        !isSubmitted ? (
            <form className="form mt-5" onSubmit={handleSubmit} >
            <h2>Get In Touch !</h2>
            <div className="row mt-5">
                <div className="col-6">
                    <div className="form-group">
                    <input className='form-control' type="text" name="name" id="name" placeholder='Name*' value={name} onChange={ e => setName(e.target.value)} />
                    </div>
                </div>
                <div className="col-6">
                    <input className='form-control' type="email" name="email" id="email" placeholder='Email*' value={email} onChange={ e => setEmail(e.target.value)} />
                </div>
            </div>
            <textarea className='form-control mt-5' name="message" id="message" cols="30" rows="10" placeholder='Enter your message...*' value={message} onChange={ e => setMessage(e.target.value)} ></textarea>
            <input  className="mt-5 btn btn-success" type="submit" value='Send' />
        </form>
        )
        :
        (
            <div className="messageSent">
                <i className="fas fa-check-circle mt-5"></i>
            </div>
        )
    )
}

export default ContactForm