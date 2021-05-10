
import SearchIcon from '@material-ui/icons/Search';

import IconButton from '@material-ui/core/IconButton';

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     <IconButton aria-label="search" color="inherit" onClick={handleClickOpen}>
            <SearchIcon />
          </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tim kiem</DialogTitle>
        <DialogContent>
          <DialogContentText style={{width:'600px',maxWidth:'100%'}}>
            Hay nhap noi dung ban can tim
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Tim Kiem
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}