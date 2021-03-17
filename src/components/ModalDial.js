import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, DialogContentText } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';

import Holidays from "./Holidays";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ModalDial = ({open,handleClose,valor1,valor}) => {
    return ( 

        <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        TransitionComponent={Transition}
        PaperProps={{
            style: {
            backgroundColor: 'white',
            boxShadow: 'none',
            },
        }}>
        <DialogTitle id="max-width-dialog-title">
          
          <DialogContentText>
             Feriados de {valor1}
          </DialogContentText>
        </DialogTitle>
        <DialogContent>
            <Holidays Country={valor}/>
        </DialogContent>
        <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary">
                    X
                </Button>
            </DialogActions>
        
      </Dialog>
     );
}
 
export default ModalDial;