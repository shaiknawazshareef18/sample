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
  const [placedComments, setPlacedComments] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //  Dito images brace

  //   const tileData = [
  //     {
  //    img: image,
  //         title: 'Image',
  //        author: 'author',
  //        cols: 2,
  //     },
  //    ];

  function handleApprove() {
    firestore
      .collection('tickets')
      .doc(chosenDocument)
      .update({
        adminID: props.user.id,
        comments: placedComments,
        status: 'approved',
        administeredAt: new Date(),
      })
      .then(() => {
        setOpenDialog2(false);
        setChosenDocument(null);
        setPlacedComments(null);
      })
      .catch((error) => setErrorMessage(error.message));
  }

  function handleReject() {
    firestore
      .collection('tickets')
      .doc(chosenDocument)
      .update({
        adminID: props.user.id,
        comments: placedComments,
        status: 'rejected',
        administeredAt: new Date(),
      })
      .then(() => {
        setOpenDialog3(false);
        setChosenDocument(null);
        setPlacedComments(null);
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
            date: doc.data().createdAt.toDate().toString(),
            ticketID: doc.data().ticketID,
            comments: doc.data().comments,
          }))
        );
      });
    return () => unsubscribe;
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4">Pending Requests</Typography>
          <Table>
            <TableHead>
              <TableCell>
                <b>Ticket</b>
              </TableCell>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell>
                <b>Comments</b>
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
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.ticketID}</TableCell>
                  <TableCell>{ticket.date}</TableCell>
                  <TableCell>{ticket.comments}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setOpenDialog3(true);
                        setChosenDocument(ticket.id);
                        setChosenTicket(ticket.ticketID);
                      }}
                    >
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={6} style={{ paddingLeft: '2rem' }}>
          <Paper>
            <Grid className={classes.root}>
              <img src={ImageIcon} style={{ width: '100%', height: '100%' }} />
              {/* <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
              </GridList> */}
            </Grid>
            <Grid container>
              <Grid item xs style={{ padding: '.5rem' }}>
                <Button fullWidth variant="outlined" color="primary">
                  Reject
                </Button>
              </Grid>
              <Grid item xs style={{ padding: '.5rem' }}>
                <Button fullWidth variant="contained" color="primary">
                  Accept
                </Button>
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
