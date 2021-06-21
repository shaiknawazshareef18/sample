import React, {useState} from 'react'
import { Typography, TextField, Box, Button } from '@material-ui/core'
import {authentication} from '../firebase/'

function Admin(props) {

    const [errorMessage, setErrorMessage] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {history} = props

    function handleLogin() {
        setErrorMessage(props.auth)
        if(email !== null || password !== null){
            authentication.signInWithEmailAndPassword(email,password)
            .then((user) => {
                props.setAuth(true)
                history.push('/admin/dashboard')
            })
            .catch((error) => setErrorMessage(error.message))
        } else {
            setErrorMessage('Cannot Submit Empty Field/s')
        }
    }

    return(
        <>
        <Box m={4}>
            <Typography variant='h4'>Admin Page </Typography>
        </Box>
        {/* TODO: Make UI for the Admin login page */}
        <Box m={6}>
            {/* Error Message Below */}
            <Typography>{errorMessage}</Typography>
            <TextField 
                fullWidth 
                variant='outlined'
                label='Email'
                type='email' 
                onChange={(event)=>setEmail(event.target.value)}/>
            <TextField 
                fullWidth 
                variant='outlined' 
                label='Password'
                type='password'
                onChange={(event)=>setPassword(event.target.value)}/>
            <Button variant='contained' onClick={handleLogin}>Login</Button>
        </Box>
        </>
    )
}

export default Admin;