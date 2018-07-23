import React, { Component } from 'react';
import PostForm from './PostForm';
import Posts from './Posts';


class App extends Component {
    render() {
        return (
            <div>
                <PostForm />
                <Posts />
            </div>
        )
    }
}

export default App;