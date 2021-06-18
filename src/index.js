import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import Register from './pages/register';
import About from './pages/about';
import ContactUs from './pages/contactUs';
import Error404 from './pages/error404';

import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

    return (
        <>  
            <CssBaseline />
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />} />
                    <Route exact path="/register" render={props => <Register {...props} />} />
                    <Route exact path="/about" render={props => <About {...props} />} />
                    <Route exact path="/contactUs" render={props => <ContactUs {...props} />} />
                    <Route exact path="*" render={props => <Error404 {...props} />} />
                </Switch>
            </Router>
            <Footer />
        </>
    );
}

ReactDom.render(<App />, document.getElementById('root'));

