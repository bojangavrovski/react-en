import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data})
        })
    }

    render() {
        return(
            this.state.posts.map((v, i) => <PostItem title={v.title} content={v.body} key={v.id} pid={v.id} />)
        )
    }
}

class PostItem extends Component {
    render() {
        return(
            <div className="post-item">
                <h2>
                    <Link to={`/post/${this.props.pid}`}>{this.props.title}</Link>
                </h2>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default PostList;