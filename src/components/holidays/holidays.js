  
import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Fab from '@material-ui/core/Fab';

function Holidays() {
    const [result, setResult] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => { 
     
        setOpen(true); 
      };
      const handleClose = () => {
        setOpen(false);
      };


    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
                PaperProps={{
                    style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    },
                }}>
                <DialogTitle id="max-width-dialog-title">
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained" color="primary">
                            <CloseIcon/>
                        </Button>
                    </DialogActions>
                </DialogTitle>
                <DialogContent>
                    prueba
                </DialogContent>
            </Dialog>
        </div>
    );
}