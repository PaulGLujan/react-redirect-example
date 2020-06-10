import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routes from './Routes';

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
            <Routes />
        </Router>
    );
}

export default App;
