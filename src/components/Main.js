import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router';
import PostList from './PostList';
import Post from './Post';
import Create from './Create';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    loginHandler(){
        this.setState({loggedIn: !this.state.loggedIn});
    }

    render() {
        return <div className="main-content">
            <button onClick={this.loginHandler.bind(this)}>
              {this.state.loggedIn ? "Logged in" : "Logged Out"}
            </button>
            <Switch>
              <Route exact path="/" component={PostList} />
              <Route path="/post/:pid" component={Post} />
              <PrivateRoute path="/create" component={Create} loggedIn={this.state.loggedIn} />
            </Switch>
          </div>; 
    }
}

const PrivateRoute = ({component: Component, loggedIn}) => {
    return (
        <Route render={(props) => {
            return (
                loggedIn === true
                ? <Component {...props} />
                : <Redirect to="/" />
            )
        }}
        />
    )
}

export default Main;