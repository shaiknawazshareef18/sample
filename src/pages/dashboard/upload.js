import React, {useState} from 'react'
import {Box, Typography, Divider, TextField, Button, TableRow} from '@material-ui/core'

function Upload(){

    const [selectedImages, setSelectedImages] = useState([])
    const [errorMessage2, setErrorMessage2] = useState(null)
    const [openDialog, setOpenDialog] = useState(false)
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

    return(
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

export default Upload