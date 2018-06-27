import React, { Component } from 'react';

export default function () {
    return (
        <div>
            <input placeholder="a" name="a" value={this.props.valueA} type="number" onChange={this.props.valueHandler} />
            <input placeholder="b" name="b" value={this.props.valueB} type="number" onChange={this.props.valueHandler} />
        </div>
    )
}