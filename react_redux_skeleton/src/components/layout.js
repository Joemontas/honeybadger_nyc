import React, { Component } from 'react';
import { Route, Link } from 'react-router';
import Home from './home';
import Signup from './components/signup';
import Login from './components/user_credentials/login';

const Layout = () => {
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>                
            </header>

            <main>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
            </main>

        </div>
    )
}

export default Layout;
