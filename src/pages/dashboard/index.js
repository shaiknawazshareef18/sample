import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import CreateAdmin from './createAdmin';
import Upload from './upload';
import Pending from './pending';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: 170,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    alignContent: 'center',
  },
  container: {
    height: '100%',
    alignItems: 'flex-start',
  },
}));


export default function ClippedDrawer(props) {
  const classes = useStyles();
  const userID = props.user.id 
  const [value, setValue] = useState(2);

  function TabPanel(props) {
    const { value, index } = props;
  
    return (
      <Grid container style={{ display: 'flex' }}>
        <Grid item xs={12}>
          <Paper
            square
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{ padding: '2rem' }}
          >
            {value === 0 && <CreateAdmin />}
            {value === 1 && <Upload id={userID}/>}
            {value === 2 && <Pending id={userID} />}
            {value === 3 && (
              // UI Appear when Member is Clicked
              <Typography>This feature is currently unavailable</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper square elevation={1}>
          <Typography variant="h6" style={{ padding: '1rem' }}>
            Logged in as {props.user.firstname} {props.user.middlename[0]}.{' '}
            {props.user.lastname}
          </Typography>
        </Paper>
        <Grid item xs={12} style={{ padding: '.5rem' }}>
          <Paper square>
            <Tabs
              value={value}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Create Account" />
              <Tab label="Upload Weave Images" />
              <Tab label="Pending Requests" />
              <Tab label="Member Accounts" disabled />
            </Tabs>
            <TabPanel value={value} index={0} />
            <TabPanel value={value} index={1} />
            <TabPanel value={value} index={2} />
            <TabPanel value={value} index={3} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
