import React, { Component } from 'react'
import '../Css/header.css'

class HeaderBase extends Component {
    constructor(){
        super()
        this.state={
            date:new Date()
        }
    }
    render() {
        return (
          <div>
          <div className="headbase">
                <div className="vol">
                    <p>Vol.312</p>
                </div>
                <hr/>
                <div className="date">
                <p className="date">Banglore, {this.state.date.toLocaleDateString()}</p>
                </div>
                <hr /> 
                <div className="address">
                    <p>4th floor,provido tower,BTM Layout,Banglore</p>   
                </div>      
            </div>
            <hr />
            <hr />
            </div>
        )
    }
}

export default HeaderBase
