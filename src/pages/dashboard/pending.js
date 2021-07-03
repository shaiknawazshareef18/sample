import React, { useState, useEffect } from 'react';
import {
  Grid,
  GridList,
  GridListTile,
  Paper,
  Typography,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { firestore } from '../../firebase';

import ImageIcon from '../../assets/image symbol.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

function Pending(props) {
  const classes = useStyles();
  const [tickets, setTickets] = useState([]);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [openDialog3, setOpenDialog3] = useState(false);
  const [chosenDocument, setChosenDocument] = useState(null);
  const [chosenTicket, setChosenTicket] = useState(null);
  const [chosenImages, setChosenImages] = useState(null);
  const [chosenCategory, setChosenCategory] = useState(null);
  const [chosenAuthor, setChosenAuthor] = useState(null);
  const [placedComments, setPlacedComments] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function handleApprove() {
    firestore
      .collection('tickets')
      .doc(chosenDocument)
      .update({
        adminID: props.id,
        comments: placedComments,
        status: 'approved',
        administeredAt: new Date(),
      })
      .then(() => {
        
        chosenImages.map(async (image) => {
          await firestore.collection(chosenCategory).add({
            author: chosenAuthor,
            createdAt: new Date(),
            imageURL: image,
            title: image,
            userID: chosenAuthor
          })
          .catch((error)=>setErrorMessage(error.message))
        })
        setOpenDialog2(false);
        setChosenDocument(null);
        setPlacedComments(null);
        setChosenImages(null);

      })
      .catch((error) => setErrorMessage(error.message));
  }

  function handleReject() {
    firestore
      .collection('tickets')
      .doc(chosenDocument)
      .update({
        adminID: props.id,
        comments: placedComments,
        status: 'rejected',
        administeredAt: new Date(),
      })
      .then(() => {
        setOpenDialog3(false);
        setChosenDocument(null);
        setPlacedComments(null);
        setChosenImages(null);
      })
      .catch((error) => setErrorMessage(error.message));
  }

  useEffect(() => {
    const unsubscribe = firestore
      .collection('tickets')
      .where('status', '==', 'pending')
      .onSnapshot((querySnapshot) => {
        setTickets(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            status: doc.data().status,
            date:
              monthNames[doc.data().createdAt.toDate().getMonth()] + " " +
              doc.data().createdAt.toDate().getDate().toString() + ", " + 
              doc.data().createdAt.toDate().getFullYear().toString(),
            ticketID: doc.data().ticketID,
            comments: doc.data().comments,
            images: doc.data().images,
            category: doc.data().category,
            author: doc.data().userID
          }))
        );
      });
    return () => unsubscribe;
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ marginBottom: '1rem' }}>
            Pending Requests
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height: '100%' }}>
            <Table>
              <TableHead>
                <TableCell>
                  <b>Ticket</b>
                </TableCell>
                <TableCell>
                  <b>Date</b>
                </TableCell>
                <TableCell>
                  <b>Category</b>
                </TableCell>
                <TableCell>
                  <b>Status</b>
                </TableCell>
                <TableCell>
                  <b>Actions</b>
                </TableCell>
              </TableHead>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id} style={{ overflowY: 'auto' }}>
                    <TableCell>{ticket.ticketID}</TableCell>
                    <TableCell>{ticket.date}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>{ticket.status}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setChosenDocument(ticket.id);
                          setChosenTicket(ticket.ticketID);
                          setChosenImages(ticket.images)
                          setChosenCategory(ticket.category)
                          setChosenAuthor(ticket.author)
                        }}
                      >
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ paddingLeft: '2rem' }}>
          <Paper>
            <Grid className={classes.root}>
              {chosenImages && (
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                  {chosenImages.map((tile) => (
                  <GridListTile key={tile} cols={1}>
                    <img src={tile} alt={tile} />
                  </GridListTile>
                  ))}
                </GridList>
              )}
              {!chosenImages && (
                <Typography>Nothing is selected yet</Typography>
              )}
            </Grid>
            <Grid container>
              <Grid item xs style={{ padding: '.5rem' }}>
                {chosenDocument && (
                  <Button 
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={()=>setOpenDialog3(true)}>
                    Reject
                  </Button>
                )}
              </Grid>
              <Grid item xs style={{ padding: '.5rem' }}>
                {chosenDocument && (
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={()=>{
                      setOpenDialog2(true)}}>
                    Accept
                  </Button>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        open={openDialog2}
        onClose={() => {
          setOpenDialog2(false);
          setChosenDocument(null);
          setPlacedComments(null);
        }}
      >
        <DialogTitle>Approve Request ({chosenTicket})</DialogTitle>
        <DialogContent>
          <Typography>{errorMessage}</Typography>
          <Typography>
            Add a comment if you want to place a comment, click proceed to if
            you wish to approve this request.
          </Typography>
          <TextField
            fullWidth
            label="Comment"
            onChange={(event) => setPlacedComments(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog2(false);
              setChosenDocument(null);
              setPlacedComments(null);
              setChosenImages(null);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleApprove}>Proceed</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDialog3}
        onClose={() => {
          setOpenDialog3(false);
          setChosenDocument(null);
          setPlacedComments(null);
        }}
      >
        <DialogTitle>Reject Request ({chosenTicket})</DialogTitle>
        <DialogContent>
          <Typography>{errorMessage}</Typography>
          <Typography>
            Add a comment if you want to place a comment, click proceed if you
            wish to reject this request.
          </Typography>
          <TextField
            fullWidth
            label="Comment"
            onChange={(event) => setPlacedComments(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog3(false);
              setChosenDocument(null);
              setPlacedComments(null);
              setChosenImages(null);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleReject}>Proceed</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Pending;
