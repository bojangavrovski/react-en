import React, { Component } from 'react';

class CValue extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler}> Get Result </button>
                <span>{this.props.result}</span>
            </div>
        )
    }
}

export default CValue;