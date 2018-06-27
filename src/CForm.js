import React, {Component} from 'react';
import CFormTemplate from './CFormTemplate'

export default class CForm extends Component {
    constructor(){
        super();
    }
    render() {
        return CFormTemplate.call(this)
    }
}
