import React, {useState } from 'react';
import { withRouter } from 'react-router';
import { Typography, Box, Container, Button, Toolbar} from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead } from '@material-ui/core';
import {firestore, authentication} from '../firebase';

function Dashboard() {

    const [generatedTicket, setGeneratedTicket] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function generateTicket() {
        var ticket = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (var i=0; i < 11; i++)
            ticket += characters.charAt(Math.floor(Math.random() * characters.length));
        firestore.collection('tickets').add({
            'ticketID': ticket,
            'userID': authentication.currentUser.uid,
            'approverID': null,
            'comments': null,
            'status': 'pending',
            'createdAt': new Date(),
        })
        .then(setGeneratedTicket(ticket))
        .catch(error => setErrorMessage(error.message));
    }
    
    return(
        <Container>
            <Box m={5}>
                <Typography variant="h6">
                    Note: This feature is not yet fully supported. To upload your own weaving pattern images,
                    just click generate ticket to get your ticket number and send us an email with the
                    subject as your ticket number, and wait for our confirmation email if this is approved
                    or declined by the WeaveHub admins. You can also check your generated ticket here for the
                    status of your sen't weaving pattern images. 
                </Typography>
            </Box>
            <Box m={6}>
                <Typography>{errorMessage}</Typography>
                <Toolbar>
                    <Button color='primary' variant='contained' style={{marginRight: '30px'}} onClick={generateTicket}>Generate Ticket</Button>
                    <Typography variant='h6'>Ticket Number: <b> {generatedTicket} </b></Typography>
                </Toolbar>
            </Box>
            <Box m={6}>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableCell><b>Ticket</b></TableCell>
                            <TableCell><b>Date</b></TableCell>
                            <TableCell><b>Comment/s</b></TableCell>
                            <TableCell><b>Status</b></TableCell>
                        </TableHead>
                        <TableBody>
                            {/* {tickets.length > 0 ? 
                                tickets.map((tickets) => {
                                    <TableRow key={tickets.key}>
                                    <TableCell component="th" scope="row">
                                        {tickets.ticket}
                                    </TableCell>
                                    <TableCell>{tickets.createdAt}</TableCell>
                                    <TableCell>{tickets.comments}</TableCell>
                                    <TableCell>{tickets.status}</TableCell>
                                </TableRow>
                                }) : <h1>No Data</h1>} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}

export default withRouter(Dashboard);