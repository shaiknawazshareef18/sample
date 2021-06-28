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
import Dashboard from './pages/dashboard3';
import Admin from './pages/admin';
import Gallery from './pages/gallery';

import WeaveHunt from './pages/weavehunt';

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
    // necessary for content to be below app bar
  },
  content: {
    flex: 1,
  },

  footer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '1rem',
    background: '#000000',
    position: 'absolute',
    width: '100%',
  },
  footerItem: {
    fontSize: '0.8rem',
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

            <main className={classes.content}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Home {...props} setCategory={setSelectedCategory} />
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
                  render={(props) => <About {...props} />}
                />
                <Route
                  exact
                  path="/contactUs"
                  render={(props) => <ContactUs {...props} />}
                />
                <Route
                  exact
                  path="/weavehunt"
                  render={(props) => <WeaveHunt {...props} />}
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
                  isAuthenticated={true}
                  user={user}
                />
                <Route
                  exact
                  path="*"
                  render={(props) => <Error404 {...props} />}
                />
              </Switch>
              {!user && <Footer classes={classes} />}
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
