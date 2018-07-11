import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <h1>Blog</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create</Link>
                </nav>
            </header>
        )
    }
}

export default Header;