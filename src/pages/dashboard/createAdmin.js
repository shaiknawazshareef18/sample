import React from 'react'
import {Typography, Box, TextField, Button} from '@material-ui/core'

function CreateAdmin() {
    return(
        <>
            <Typography variant='h6'>
              Note: You as the admin are reliable and responsible in creating an admin account. 
              Do not abuse and use for bad things. As Spider man said, 
              <b>"WITH GREAT POWER, COMES GREAT RESPONSIBILITY"</b>
            </Typography>

            <Box m={5}>
              <TextField required fullWidth label='First name' variant='standard' />
              <TextField required fullWidth label='Middle ame' variant='standard' />
              <TextField required fullWidth label='Last name' variant='standard' />
              <TextField required fullWidth label='Email' variant='standard' />
              <TextField fullWidth label='Mobile Number' variant='standard' />
              <Button color='primary' variant='contained'>Create Account</Button>
            </Box>
        </>
    )
}

export default CreateAdmin