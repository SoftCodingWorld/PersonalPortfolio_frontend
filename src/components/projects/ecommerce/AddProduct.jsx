// AddProduct.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button,Box } from '@mui/material';
import addProductAsync from '../../slices/productSlice';

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({ title: '', price: '' });
  const dispatch = useDispatch();

  const handleAddProduct = async () => {
   await dispatch(addProductAsync(newProduct));
    setNewProduct({ title: '', price: '' });
    onclose();
  };

  return (
    <Box p={2}>
      <TextField
        label="Title"
        value={newProduct.title}
        onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        margin='normal'
        fullWidth
      />
      <TextField
        label="Price"
        type="number"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        margin='normal'
        fullWidth
      />
      <Button onClick={handleAddProduct} variant='contained'>Add New Product</Button>
    </Box>
  );
};

export default AddProduct;
