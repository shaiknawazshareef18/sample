import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Register from './pages/register';
import About from './pages/about';
import ContactUs from './pages/contactUs';
import Error404 from './pages/error404';
import Dashboard from './pages/dashboard/';
import Admin from './pages/admin';
import Gallery from './pages/gallery';
import WeaveHunt from './pages/weavehunt';
import BetaTest from './pages/uploadBeta';
import BetaRegister from './pages/uploadBeta/register';
import BetaDashboard from './pages/uploadBeta/dashboard';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
    tonalOffset: 0.2,
  },
});

const drawerWidth = '15rem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  logo: {
    height: '2rem',
  },
  title: {
    marginInline: '1rem',
  },
  mainToolbar: {
    flex: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingInline: '1rem',
    ...theme.mixins.toolbar,
  },
  content: {
    flex: 1,
    width: 'auto',
    overflow: 'auto',
  },
  container: {
    padding: '1rem',
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  spaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  centerContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    position: 'relative',
  },
  footerItem: {
    fontSize: '0.8rem',
  },
  hasHorizontalScroll: {
    overflowX: 'scroll',
  },
  aboutCardRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    margin: '1rem',
    backgroundColor: `rgb(250, 250, 250, 0.75)`,
    boxShadow: 'none',
  },
  aboutCardDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  abourCardContent: {
    flex: '0 1 auto',
  },
}));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <div className={classes.root}>
            <Header
              classes={classes}
              open={open}
              setOpen={setOpen}
              user={user}
              setUser={setUser}
            />

            <div className={classes.content}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Home
                      {...props}
                      theme={theme}
                      classes={classes}
                      setCategory={setSelectedCategory}
                    />
                  )}
                />
                <Route
                  exact
                  path="/register"
                  render={(props) => <Register {...props} />}
                />
                <Route
                  exact
                  path="/about"
                  render={(props) => <About classes={classes} {...props} />}
                />
                <Route
                  exact
                  path="/contactUs"
                  render={(props) => <ContactUs classes={classes} {...props} />}
                />
                <Route
                  exact
                  path="/weavehunt"
                  render={(props) => <WeaveHunt classes={classes} {...props} />}
                />
                <Route
                  exact
                  path="/gallery"
                  render={(props) => (
                    <Gallery {...props} category={selectedCategory} />
                  )}
                />
                <Route
                  exact
                  path="/admin"
                  render={(props) => (
                    <Admin
                      setAuth={setIsAuthenticated}
                      setUser={setUser}
                      user={user}
                      {...props}
                    />
                  )}
                />
                {/* CHANGE isAuthenticated to True to BYPASS login in admin from isAuthenticated below  */}
                <ProtectedRoute
                  exact
                  path="/admin/dashboard"
                  component={Dashboard}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  setUser={setUser}
                />
                {/* START WEAVEHUNT USER UPLOAD IMAGE TEST */}
                <Route
                  exact
                  path="/weavehunt/test"
                  render={(props) => (
                    <BetaTest
                      setAuth={setIsAuthenticated}
                      setUser={setUser}
                      {...props}
                    />
                  )}
                />
                <Route
                  exact
                  path="/weavehunt/test/register"
                  render={(props) => <BetaRegister {...props} />}
                />
                <ProtectedRoute
                  exact
                  path="/weavehunt/test/dashboard"
                  component={BetaDashboard}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  setUser={setUser}
                />
                {/* END WEAVEHUNT USER UPLOAD IMAGE TEST */}
                <Route
                  exact
                  path="*"
                  render={(props) => <Error404 {...props} />}
                />
              </Switch>
            </div>
          </div>
          {!user && <Footer classes={classes} />}
        </Router>
      </ThemeProvider>
    </>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
