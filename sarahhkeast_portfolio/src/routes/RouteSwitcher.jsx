import React from 'react';
import LandingPage from '../pages/landing-page';
import ProjectPage from '../pages/project-page';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const RouteSwitcher = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/project' component={ProjectPage} />
        </Switch>
    </BrowserRouter>

);

export default RouteSwitcher;  