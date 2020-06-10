import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route path="/available">
                <h1>Available Pets</h1>
            </Route>
            <Route path="/adopted">
                <h1>Adopted Pets</h1>
            </Route>
            <Route path='/forms'>Forms</Route>
        </Switch>
    );
};

export default Routes;
