import React, { Component } from 'react';

class Button extends Component {
    render(){
        return (
            <div>
                <button className="calc-button">{this.props.symbol}</button>
            </div>
        )
    }
}

export default Button