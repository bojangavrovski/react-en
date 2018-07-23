import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class AppOld extends Component {
    render() {
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;