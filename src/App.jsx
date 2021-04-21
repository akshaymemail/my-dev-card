import React from 'react'
import Main from './components/Main/Main'
import SideBar from './components/SideBar/SideBar'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <SideBar />
            <Main />
        </BrowserRouter>
    )
}

export default App