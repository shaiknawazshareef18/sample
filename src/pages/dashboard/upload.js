import React, { useState } from 'react';
import {
  Grid,
  Divider,
  Typography,
  Button,
  TextField,
  TableRow,
} from '@material-ui/core';

function Upload() {
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

  return (
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
                  <img src={image.file} />
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
  );
}

export default Upload;
