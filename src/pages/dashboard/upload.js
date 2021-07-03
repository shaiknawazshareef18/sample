import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  TextField,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import {storage, firestore} from '../../firebase'

function Upload(props) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [errorMessage2, setErrorMessage2] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  function handleSelectedImages(event) {
    if (event.target.files) {
      const images = Array.from(event.target.files).map((file) => ({
        name: file['name'],
        file: file,
        key: file['lastModified'],
      }));
      setSelectedImages(images);
    }
  }

  function handleUpload() {
    setErrorMessage2(null)
    if(category === '' || author === '' || selectedImages.length <= 0){
      setErrorMessage2('Please fill in all required forms')
      setOpenDialog(false)
    } else {
      // eslint-disable-next-line
      selectedImages.map((image) => {
        const uploadTask = storage.ref(category+'/'+image.name).put(image.file)
        uploadTask.on("state_changed", 
          snapshot => {},
          error => {
            setErrorMessage2(error.message)
          },
          () => {
            storage.ref(category)
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              firestore.collection(category).add({
                createdAt: new Date(),
                imageURL: url,
                author: author,
                title: image.name,
                userID: props.id
              })
              .then(() => {
                  setOpenDialog(false)
                  setSelectedImages([])
                  setCategory('')
                  setAuthor('')
              })
              .catch((error) => {
                  setErrorMessage2(error.message)
              })
            })
          }
        )
      })
    }
  }

  return (
    <>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ marginBottom: '1rem' }}>
          Upload Weaving Images
        </Typography>
        <Typography>{errorMessage2}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs style={{ paddingRight: '1rem' }}>
            <TextField
              fullWidth
              required
              label="Category"
              variant="outlined"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              required
              label="Author"
              variant="outlined"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <input
          type="file"
          multiple
          onChange={handleSelectedImages}
          style={{ margin: '1rem' }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginBottom: '1rem',
        }}
      >
        <Typography>Images: </Typography>
        <Grid container>
          <Grid
            item
            xs
            style={{
              height: '8rem',
              overflow: 'auto',
              padding: '1rem',
              backgroundColor: '#f1f1f1',
            }}
          >
            {selectedImages.map((image) => (
              <TableRow key={image.key}>
                <Grid container alignItems="center">
                  <img src={image.file} alt={image.name} />
                  <Typography style={{ marginLeft: '.5rem' }}>
                    {image.name}
                  </Typography>
                </Grid>
              </TableRow>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => setOpenDialog(true)}
        >
          Upload
        </Button>
      </Grid>
    </Grid>

    <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
      <DialogTitle>Note</DialogTitle>
      <DialogContent>
          Make sure that the images you are uploading are all images and is valid.
          Double check the Category name and the Ticket Reference if it is correct.
          All files that you have selected will be uploaded with no restrictions
          so make srue that you as the admin will check it properly.
          Are you sure you want to upload these images?
      </DialogContent>
      <DialogActions>
          <Button onClick={()=>setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleUpload}>Proceed</Button>
      </DialogActions>
    </Dialog>
    </>
  );
}

export default Upload;
