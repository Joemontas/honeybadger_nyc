import React, { Component } from 'react';
import Cookies from 'js-cookie';

class CookieMaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chocolateCookieCount: 0,
            lemonCookieCount: 0,
            sugarCookieCount: 0,

        }
        
        this.setChocolateCookie = this.setChocolateCookie.bind(this); 
        this.setLemonCookie = this.setLemonCookie.bind(this);       
        this.setSugarCookie = this.setSugarCookie.bind(this);
        this.clearCookies = this.clearCookies.bind(this);
    }

    getCookieCount(flavor) {
        return parseInt(Cookies.get(flavor), 0) || 0;
    }

    setChocolateCookie() {
        let currentCookieCount = this.getCookieCount('chocolate');
        Cookies.set('chocolate', currentCookieCount + 1);
        this.setState({
            chocolateCookieCount: this.getCookieCount('chocolate')
        });
    }

    setLemonCookie() {
        let currentCookieCount = this.getCookieCount('lemon');
        Cookies.set('lemon', currentCookieCount + 1);
        this.setState({
            lemonCookieCount: this.getCookieCount('lemon')
        });
    }

    setSugarCookie() {
        let currentCookieCount = this.getCookieCount('sugar');
        Cookies.set('sugar', currentCookieCount + 1);
        this.setState({
            sugarCookieCount: this.getCookieCount('sugar')
        });
    }

    clearCookies() {
        Cookies.remove('chocolate');
        Cookies.remove('lemon');
        Cookies.remove('sugar');
        this.setState({
            sugarCookieCount: 0,
            chocolateCookieCount: 0,
            lemonCookieCount: 0
        })
    }

    render() {
        return (
            <div className="counter">
                <h1>COOKIE MAKER</h1>
                <p>Chocolate Cookie: <span>{this.state.chocolateCookieCount}</span></p>
                <p>Lemon Cookie: <span>{this.state.lemonCookieCount}</span></p>
                <p>Sugar Cookie: <span>{this.state.sugarCookieCount}</span></p>
                <div className = "btn_cont" >
                    <button className = "add_btn" onClick={this.setChocolateCookie}>Add Chocolate Cookie</button>
                    <button className = "add_btn" onClick={this.setLemonCookie}>Add Lemon Cookie</button>
                    <button className = "add_btn" onClick={this.setSugarCookie}>Add Sugar Cookie</button>
                    <div id= "clear_btn">
                        <button onClick={this.clearCookies}>FEELING GUILTY?, CLICK HERE</button>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default CookieMaker;