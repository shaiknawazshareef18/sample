import React from 'react'
import { Typography, Box } from '@material-ui/core'

function Error404() {
    return (
        <>  
        <Typography variant="h1" style={{fontWeight: "bolder", margin: "5%"}} align="center">Error 404</Typography>
        <Box m={10}>
            <Typography variant="h4">Hi There,</Typography>
            <Typography variant="h4">
                It Looks like the page you are trying to access is not available. If you feel this is an error,
                please report it immediately at IngigenousArtifactsHub@gmail.com
            </Typography>
        </Box>
        </>
    )
}

export default Error404