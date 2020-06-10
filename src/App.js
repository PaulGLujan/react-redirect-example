import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Redirect from './Redirect';

function App() {
    return (
        <Router>
            <header>
                <h3>
                    <Link to="/">Home</Link>
                </h3>
                <h3>
                    <Link to="/available">Available Pets</Link>
                </h3>
                <h3>
                    <Link to="/adopted">Adopted Pets</Link>
                </h3>
            </header>
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
                <Route path="/forms" component={Redirect} />
            </Switch>
        </Router>
    );
}

export default App;
