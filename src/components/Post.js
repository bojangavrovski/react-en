import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            comments: []
        }
    }

    componentDidMount(){
        let getPostUrl = "https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.pid;
        let getCommentsUrl = "https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.pid + '/comments';
        fetch(getPostUrl)
        .then(res => res.json())
        .then(data => {
            this.setState({title: data.title, body: data.body});
            return fetch(getCommentsUrl)
        })
        .then(res => res.json())
        .then(data => {
            this.setState({comments: data})
        });
    }

    render() {
        return <div className="post-single">
            <h2>{this.state.title}</h2>
            <p>{this.state.body}</p>
            <hr/>
            <ul>
                {this.state.comments.map((v, i) => <Comment name={v.name} email={v.email} body={v.body} key={v.id} />)}
            </ul>
          </div>;
    }
}

class Comment extends Component {
    render() {
        return (
            <li>
                <div><b>{this.props.name}</b> &lt;{this.props.email}&gt;</div>
                <p>{this.props.body}</p>
            </li>
        )
    }
}

export default Post;