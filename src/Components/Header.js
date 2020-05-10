import React, { Component } from 'react'
import Logo from '../Assets/logo.jpg'
import '../Css/header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Hacker</h1>
                <img src={Logo} className="logo" alt="logo"/>
                <h1 > News</h1>              
            </div>
        )
    }
}

export default Header
