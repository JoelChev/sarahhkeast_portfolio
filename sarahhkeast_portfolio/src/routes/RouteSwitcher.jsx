import React from 'react';
import AboutPage from '../pages/about-page';
import LandingPage from '../pages/landing-page';
import ProjectPage from '../pages/project-page';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const RouteSwitcher = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route path='/project' component={ProjectPage} />
        </Switch>
    </BrowserRouter>

);

export default RouteSwitcher;  