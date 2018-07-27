import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavHome from './components/Navbar';
import Home from './components/Home';
import New from './components/New';
import Base from './components/Base';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavHome/>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/new' component={New} />
                <Route path='/anime' component={Base} />
            </div>
        </Router>
    )
};

export default AppRouter;