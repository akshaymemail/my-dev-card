import React from 'react'
import Space from '../../Space/Space'
import './AboutMe.css'
import Featured from './Featured/Featured'
import Showcase from './Showcase/Showcase'
import Technologies from './Technologies/Technologies'
import WhatIDo from './WhatIDo/WhatIDo'

const AboutMe = () => {
    return (
        <div id="aboutMe">
            <Showcase />
            <Space />
            <WhatIDo />
            <Technologies />
            <Space />
            <Featured />
        </div>
    )
}

export default AboutMe