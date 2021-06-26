import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem disabled button key='Member' onClick={()=>setSelected('member')}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Member Accounts' />
            </ListItem>
            <ListItem button key='Admin' onClick={()=>setSelected('admin')}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Create Admin Account' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key='Upload' onClick={()=>setSelected('upload')}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Upload Weave Image/s' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key='Pending' onClick={()=>setSelected('pending')}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Pending Requests' />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        {
          selected === 'member' && (
            // UI Appear when Member is Clicked
            <Typography>Hi renz, bkt mo eto na access luhhhh nka disable eto char lng haahhahaha</Typography>
          )
        }
        {
          selected === 'admin' && (
            // UI Appear when Admin is Clicked
            <Typography>Hi renz, this is where the admin chuchu wala lng haahhahaha</Typography>
          )
        }
        {
          selected === 'upload' && (
            // UI Appear when Upload is Clicked
            <Typography>Hi renz, upload ng mga weaving patterns chuchu</Typography>
          )
        }
        {
          selected === 'pending' && (
            // UI Appear when Pending is Clicked
            <Typography>Hi renz, sampple content for pending requests ahahahaha</Typography>
          )
        }
        {
          selected === null && (
            // UI Appear when nothing is Clicked
            <Typography paragraph>Default Dashboard (Nothing is selected)</Typography>
          )
        }
      </main>
    </div>
  );
}
