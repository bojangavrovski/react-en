import React, {Component} from 'react';

class Create extends Component {
    constructor(props){
        super(props);
        console.log(this.props.loggedIn)
    }
    render() {
        return (
            <div>
                <h3>Form - Create Post</h3>
                <p>...</p>
            </div>
        )
    }
}

export default Create;