import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Experience from './Pages/Experience/Experience'
import About from './Pages/About/About'
import Techs from './Pages/Techs/Techs'
import MainScreen from './Pages/Main/MainScreen'

const Routes: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={MainScreen} />
            <Route path="/experience"  component={Experience} />
            <Route path="/techs"  component={Techs} />
            <Route path="/about"  component={About} />
        </BrowserRouter>
    )
};

export default Routes;