import React, {useState, useEffect} from 'react';
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
import {TableRow, Button, TextField, Box, TableBody, TableCell, Table, TableHead} from '@material-ui/core'
import { Dialog, DialogTitle, DialogContent,DialogActions } from '@material-ui/core';
import { firestore } from '../firebase';

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

export default function ClippedDrawer(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState(null);
  const [tickets, setTickets] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [openDialog2, setOpenDialog2] = useState(false)
  const [openDialog3, setOpenDialog3] = useState(false)
  const [chosenDocument, setChosenDocument] = useState(null)
  const [chosenTicket, setChosenTicket] = useState(null)
  const [placedComments, setPlacedComments] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorMessage2, setErrorMessage2] = useState(null)
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')

  function handleSelectedImages(event) {
    if(event.target.files){
        const images = Array.from(event.target.files).map((file)=>(
            {
                name: file['name'],
                file: file,
                key: file['lastMpdified']
            }
        ))
        setSelectedImages(images)
    }
  }
  function handleApprove() {
    firestore.collection('tickets').doc(chosenDocument).update({
        adminID: props.user,
        comments: placedComments,
        status: 'approved',
        administeredAt: new Date()
    })
    .then(() => {
        setOpenDialog2(false)
        setChosenDocument(null)
        setPlacedComments(null)
    })
    .catch((error)=>setErrorMessage(error.message))
  }

  function handleReject() {
    firestore.collection('tickets').doc(chosenDocument).update({
        adminID: props.user,
        comments: placedComments,
        status: 'rejected',
        administeredAt: new Date()
    })
    .then(() => {
        setOpenDialog3(false)
        setChosenDocument(null)
        setPlacedComments(null)
    })
    .catch((error)=>setErrorMessage(error.message))
  }

  useEffect(()=> {
    const unsubscribe = firestore.collection('tickets').where('status', '==', 'pending')
    .onSnapshot((querySnapshot)=>{
        setTickets(querySnapshot.docs.map(doc=>(
            {
                id: doc.id, 
                status: doc.data().status,
                date: doc.data().createdAt.toDate().toString(),
                ticketID: doc.data().ticketID,
                comments: doc.data().comments
            }
        )))
    })
    return () => unsubscribe
  },[])


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
            <Box m={4}>
              <Typography variant='h4'>Upload Weaving Pattern Image/s</Typography>
              <Divider />
              <Typography>{errorMessage2}</Typography>
              <input type='file' multiple onChange={handleSelectedImages}/>
              <br/>
              <TextField label='Category' variant='outlined' value={category} onChange={(event)=>setCategory(event.target.value)}/>
              <TextField label='Author' variant='outlined' value={author} onChange={(event)=>setAuthor(event.target.value)}/>
              <Button variant='contained' onClick={()=>setOpenDialog(true)}>Upload</Button>
              <Typography>Selected Images</Typography>
              {selectedImages.map((image) => (
                  <TableRow key={image.key}>
                      <Typography>{image.name}</Typography>
                  </TableRow>
              ))}
            </Box>
          )
        }
        {
          selected === 'pending' && (
            // UI Appear when Pending is Clicked
            <>
            <Box m={4}>
            <Typography variant='h4'>Pending Request/s</Typography>
            <Table>
                <TableHead>
                    <TableCell><b>Ticket</b></TableCell>
                    <TableCell><b>Date</b></TableCell>
                    <TableCell><b>Comment/s</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                    <TableCell><b>Actions</b></TableCell>
                </TableHead>
                <TableBody>
                    {
                        tickets.map((ticket) => (
                            <TableRow key={ticket.id}>
                                <TableCell>{ticket.ticketID}</TableCell>
                                <TableCell>{ticket.date}</TableCell>
                                <TableCell>{ticket.comments}</TableCell>
                                <TableCell>{ticket.status}</TableCell>
                                <TableCell>
                                    <Button onClick={()=> {
                                        setOpenDialog3(true) 
                                        setChosenDocument(ticket.id)
                                        setChosenTicket(ticket.ticketID)
                                    }}>Reject</Button>
                                    <Button onClick={()=> {
                                        setOpenDialog2(true)
                                        setChosenDocument(ticket.id)
                                        setChosenTicket(ticket.ticketID)
                                    }}>Approve</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </Box>
            <Dialog open={openDialog2} onClose={()=>{
            setOpenDialog2(false)
            setChosenDocument(null)
            setPlacedComments(null)
            }}>
            <DialogTitle>Approve Request ({chosenTicket})</DialogTitle>
            <DialogContent>
                <Typography>{errorMessage}</Typography>
                <Typography>
                    Add a comment if you want to place a comment,
                    click proceed to if you wish to approve this request.
                </Typography>
                <TextField fullWidth label='Comment' onChange={(event)=>setPlacedComments(event.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setOpenDialog2(false)
                    setChosenDocument(null)
                    setPlacedComments(null)
                }}>Cancel</Button>
                <Button onClick={handleApprove}>Proceed</Button>
            </DialogActions>
            </Dialog>
            <Dialog open={openDialog3} onClose={()=>{
            setOpenDialog3(false)
            setChosenDocument(null)
            setPlacedComments(null)
            }}>
            <DialogTitle>Reject Request ({chosenTicket})</DialogTitle>
            <DialogContent>
                <Typography>{errorMessage}</Typography>
                <Typography>
                    Add a comment if you want to place a comment,
                    click proceed if you wish to reject this request.
                </Typography>
                <TextField fullWidth label='Comment' onChange={(event)=>setPlacedComments(event.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setOpenDialog3(false)
                    setChosenDocument(null) 
                    setPlacedComments(null)
                }}>Cancel</Button>
                <Button onClick={handleReject}>Proceed</Button>
            </DialogActions>
            </Dialog>
            </>

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
