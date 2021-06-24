import React, {useState} from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Register from './pages/register'
import About from './pages/about'
import ContactUs from './pages/contactUs'
import Error404 from './pages/error404'
import Dashboard from './pages/dashboard'
import Admin from './pages/admin'
import Gallery from './pages/gallery';

import WeaveHunt from './pages/weavehunt'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#D99818',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
            contrastText: '#111111',
        },
        error: {
            main: '#E57373',
            contrastText: '#111111',
        },
        contrastThreshold: 3,
        tonalOffset:0.2,
    },
})

function App(){

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [user, setUser] = useState(null)

    return (
        <>  
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <Router>
                <Header user={user} />
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} setCategory={setSelectedCategory} />} />
                    <Route exact path="/register" render={props => <Register {...props} />} />
                    <Route exact path="/about" render={props => <About {...props} />} />
                    <Route exact path="/contactUs" render={props => <ContactUs {...props} />} />
                    <Route exact path="/weavehunt" render={props => <WeaveHunt {...props} />} />
                    <Route exact path="/gallery" render={props => <Gallery {...props} category={selectedCategory}  />} />
                    <Route exact path="/admin" render={props => <Admin setAuth={setIsAuthenticated} setUser={setUser} user={user} {...props} />} />
                    {/* CHANGE isAuthenticated to True to BYPASS login in admin from isAuthenticated below  */}
                    <ProtectedRoute exact path="/admin/dashboard" component={Dashboard} isAuthenticated={true} user={user} />
                    <Route exact path="*" render={props => <Error404 {...props} />} />
                </Switch>
            </Router>
            <Footer />
        </ThemeProvider>
        </>
    )
}

ReactDom.render(<App />, document.getElementById('root'))

