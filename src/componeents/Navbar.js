import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



export default function Navebar() {
    const [open, setOpen] = React.useState(false);

    const loginfb =() =>{};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color= ''>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nested Comment
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Login/Signup"}
        </DialogTitle>
        <DialogContent>
        <div style={{ paddingTop: '6px', display: 'flex', flexDirection: 'column' }}> 
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={loginfb}> Login</Button>
          <Button onClick={handleClose} autoFocus>
            cancle
          </Button>
        </DialogActions>
      </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
