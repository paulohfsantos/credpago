import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Signup" component={Signup} />
            </Switch>
        </Router>
    )
}

export default App