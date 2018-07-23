import React, { Component } from 'react';
import { insertPost, deletePost } from '../actions/index';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return { 
        addPost: data => dispatch(insertPost(data)) ,
        deletePost: data => dispatch(deletePost(data)) 
    };
}

class PostFormCom extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            id: 0
        }

        this.titleChange = this.titleChange.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    titleChange(e){
        this.setState({title: e.target.value})
    }

    savePost(){
        let o = { ...this.state, id: Date.now() };
        this.props.addPost(o);
        this.setState({title: "", id: 0, body: ""})
    }

    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.titleChange}/>
                <button onClick={this.savePost}> SAVE </button>
            </div>
        )
    }
}

const PostForm = connect(null, mapDispatchToProps)(PostFormCom);
export default PostForm;