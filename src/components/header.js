// Other Functions
import React from 'react';
import { withRouter } from 'react-router-dom';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icons

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import ContactUsIcon from '@material-ui/icons/HeadsetMicRounded';
import InfoIcon from '@material-ui/icons/InfoRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LogoS from '../assets/logo_s.png';
import LogoHunt from '../assets/weaveHuntLogo.png';
import { authentication } from '../firebase';

function Header(props) {
  const { classes, open, setOpen, history, user, setUser } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleLogout() {
    authentication.signOut().then(() => {
      setUser(null);
      history.push('/admin');
    });
  }

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx({
              [classes.hide]: open,
            })}
          >
            <ChevronRightIcon />
          </IconButton>
          <IconButton
            onClick={handleDrawerClose}
            className={clsx({
              [classes.hide]: !open,
            })}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List className={classes.mainToolbar}>
          <List item>
            <ListItem button onClick={() => history.push('/')}>
              <ListItemIcon>
                <img src={LogoS} alt="logo" className={classes.logo} />
              </ListItemIcon>
              <ListItemText>WEAVEhub</ListItemText>
            </ListItem>

            <ListItem button onClick={() => history.push('/weavehunt')}>
              <ListItemIcon>
                <img alt="LogoHunt" src={LogoHunt} height="32" />
              </ListItemIcon>
              <ListItemText>WEAVEhunt</ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List item>
            <ListItem button onClick={() => history.push('/')}>
              <ListItemIcon>
                <PhotoLibraryIcon />
              </ListItemIcon>
              <ListItemText>Galleries</ListItemText>
            </ListItem>
          </List>
        </List>

        <List>
          <ListItem button onClick={() => history.push('/about')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push('/contactUs')}>
            <ListItemIcon>
              <ContactUsIcon />
            </ListItemIcon>
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
          {user && (
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          )}
        </List>
      </Drawer>
      {/* <Toolbar>
          <>
            <img src={LogoS} alt="logo" style={styles.logo} />
            <Typography
              style={styles.title}
              variant="h6"
              onClick={() => history.push('/')}
            >
              WEAVE<b>hub</b>
            </Typography>
            <Typography style={styles.spacer} />
          </>
          <Button
            startIcon={<img alt="LogoHunt" src={LogoHunt} height="32" />}
            onClick={() => history.push('/weavehunt')}
          >
            WEAVEhunt
          </Button>

          <Button
            startIcon={<InfoIcon />}
            onClick={() => history.push('/about')}
          >
            About
          </Button>

          <Button
            startIcon={<ContactUsIcon />}
            onClick={() => history.push('/contactUs')}
          >
            Contact Us
          </Button>
          {user && (
            <Button startIcon={<AccountCircleIcon />} onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar> */}
    </>
  );
}

export default withRouter(Header);
