import React from 'react'
import './Image.css'
import avtar from '../../../../images/profile/avatar.jpg'
const Image = () => {
    return (
        <div id='avatar' >
            <img src={avtar} alt="akshay singh"/>
        </div>
    )
}

export default Image