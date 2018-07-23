import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

const mapStateToProps = state => {
    return {posts: state.posts};
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

class PostsCom extends Component {
    constructor(props) {
        super(props);
        // this.getPosts = this.getPosts.bind(this);
    }

    // getPosts() {
    //     this.props.fetchPosts()
    // }
    
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.getPosts}>LOAD!</button> */}
                <ul>
                    {this.props.posts.map(v => <SinglePost {...v} key={v.id} />)}
                </ul>
            </div>
        )
    }
}

class SinglePost extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsCom);
export default Posts;