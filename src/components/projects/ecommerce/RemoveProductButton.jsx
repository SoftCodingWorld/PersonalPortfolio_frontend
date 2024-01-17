import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeProductAsync } from '../../slices/productSlice';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const RemoveProductButton = ({ productId, onRemove }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleRemove = async () => {
    await dispatch(removeProductAsync(productId));
    setOpen(false);
    onRemove();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>Delete</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRemove}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RemoveProductButton;