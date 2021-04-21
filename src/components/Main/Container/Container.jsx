import React from 'react'
import './Container.css'
import {Route} from 'react-router-dom'
import AboutMe from '../../Screens/AboutMe/AboutMe'
import Contact from '../../Screens/Contact/Contact'
import Portfolio from '../../Screens/Portfolio/Portfolio'
import Resume from '../../Screens/Resume/Resume'

const Container = () => {
    return (
        <div id='container' >
            <Route path='/' exact component={AboutMe} ></Route>
            <Route path='/portfolio' component={Portfolio}></Route>
            <Route path='/resume' component={Resume}></Route>
            <Route path='/contact' component={Contact}></Route>
        </div>
    )
}

export default Container