import React from 'react';
import { Router, Link } from 'react-router-dom';
import Home from './home';
import Burrito from './burrito';


const Layout = () => {
    return (
        <div className='layout'>
        <header>
            <nav>
                <ul> 
                    <li><Link to='/'/>Home</li>
                    <li><Link to='/burritos'/>Burritos</li>
                    <li><Link to='/tacos'/>Tacos</li>
                </ul>
            </nav>
        </header>

            <div>
                <Router exact path='/' component={Home} />
                <Router path= '/burritos' component={Burrito} />
                <Router path='/tacos' render={() => <div>TACOOS 4EVA,</div>}/>
           </div>
        </div>
    );
}