import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import { makeStyles } from '@material-ui/core/styles'
import { authentication } from '../../firebase'
import { useHistory } from 'react-router'

import CreateAdmin from './createAdmin'
import Upload from './upload'
import Pending from './pending'

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
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer(props) {
  const classes = useStyles()
  const history = useHistory()
  const [selected, setSelected] = useState(null)
 
  function handleLogout() {
    authentication.signOut().then(()=>{
      history.push('/admin')
    })
  }
  
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
          <Divider />
          <List>
            <ListItem button key='Logout' onClick={handleLogout}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Logout' />
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
          selected === 'admin' && (<CreateAdmin/>)
        }
        {
          selected === 'upload' && (<Upload />)
        }
        {
          selected === 'pending' && (<Pending user={props.user} />)
        }
        {
          selected === null && (
            // UI Appear when nothing is Clicked
            <>
            <Typography variant='h3'>
              Welcome back {props.user.firstname} {props.user.middlename[0]}. {props.user.lastname}
            </Typography>
            </>
          )
        }
      </main>
    </div>
  );
}
