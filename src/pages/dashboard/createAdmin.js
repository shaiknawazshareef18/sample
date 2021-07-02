import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@material-ui/core';
import {
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { authentication, firestore } from '../../firebase';

function CreateAdmin() {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  function checkCredentials() {
    setErrorMessage(null);
    if (
      firstname === '' ||
      middlename === '' ||
      lastname === '' ||
      email === ''
    ) {
      setErrorMessage('Please fill all required fields');
    } else {
      setOpenDialog(true);
    }
  }

  function createAdminAccount() {
    authentication
      .createUserWithEmailAndPassword(email, 'Password123')
      .then((result) => {
        authentication
          .sendPasswordResetEmail(email)
          .then(() => {
            firestore
              .collection('users')
              .doc(result.user.uid)
              .set({
                birthdate: null,
                createdAt: new Date(),
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                mobilenumber: mobileNumber,
                status: 'admin',
              })
              .then(() => {
                setOpenDialog2(true);
                clearFields();
              })
              .catch((error) => setErrorMessage(error.message));
          })
          .catch((error) => setErrorMessage(error.message));
      })
      .catch((error) => setErrorMessage(error.message));
  }

  function clearFields() {
    setFirstname('');
    setMiddlename('');
    setLastname('');
    setEmail('');
    setMobileNumber('');
  }

  return (
    <>
      <Typography variant="h4">Create Administrator Account</Typography>
      <Typography gutterBottom>
        Note: Administrators are able to view, edit, and delete the images.
        Please review the <Link href="#">Privacy Policy</Link> first before
        creating the account.
      </Typography>

      <Typography variant="h5">{errorMessage}</Typography>
      <TextField
        required
        fullWidth
        label="First name"
        variant="standard"
        value={firstname}
        onChange={(event) => setFirstname(event.target.value)}
      />
      <TextField
        required
        fullWidth
        label="Middle name"
        variant="standard"
        value={middlename}
        onChange={(event) => setMiddlename(event.target.value)}
      />
      <TextField
        required
        fullWidth
        label="Last name"
        variant="standard"
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <TextField
        required
        fullWidth
        label="Email"
        variant="standard"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        fullWidth
        label="Mobile Number"
        variant="standard"
        value={mobileNumber}
        onChange={(event) => setMobileNumber(event.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={checkCredentials}
        style={{ margin: '1rem 0rem' }}
      >
        Create Account
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>
          Are you sure you want to create an admin account for this credentials?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              clearFields();
              setOpenDialog(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              createAdminAccount();
              setOpenDialog(false);
            }}
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDialog2} onClose={() => setOpenDialog2(false)}>
        <DialogTitle>Account Status</DialogTitle>
        <DialogContent>
          The admin account was successfuly created, the default password for
          this account is Password123, please check his/her email to change the
          default password
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateAdmin;
