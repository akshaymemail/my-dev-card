import React from 'react'
import DarkMode from './DarkMode/DarkMode'
import Image from './Image/Image'
import Intro from './Intro/Intro'
import Name from './Name/Name'
import './Profile.css'
import Section from './Section/Section'
import Social from './Social/Social'

const Profile = () => {
    return (
        <div id='profile' >
            <Name />
            <Image />
            <Intro />
            <Social />
            <hr/>
            <Section />
            <hr/>
            <DarkMode />
        </div>
    )
}

export default Profile