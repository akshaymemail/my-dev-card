import React from 'react'
import Profile from '../SideBar/Profile/Profile'
import './Header.css'
const Header = () => {
    return (
        <header id='header' >
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="/">AKSHAY</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Profile />
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Header