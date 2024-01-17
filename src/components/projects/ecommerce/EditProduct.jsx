// EditProduct.jsx

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProductAsync } from '../../slices/productSlice';
import { TextField, Button, Box } from '@mui/material';

const EditProduct = ({ product }) => {
  const [editProduct, setEditProduct] = useState(product);
  const dispatch = useDispatch();

  useEffect(() => {
    setEditProduct(product); // Update state when product prop changes
  }, [product]);

  const handleUpdateProduct = async () => {
    await dispatch(updateProductAsync({ productId: editProduct.id, updatedData: editProduct }));
    onclose();
  };

  return (
    <Box p={2}>
      <TextField
        label="Title"
        value={editProduct.title}
        onChange={(e) => setEditProduct({ ...editProduct, title: e.target.value })}
        margin='normal'
        fullWidth
      />
      <TextField
        label="Price"
        type="number"
        value={editProduct.price}
        onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
        margin='normal'
        fullWidth
      />
      <Button onClick={handleUpdateProduct} variant='contained'>Update Product</Button>
    </Box>
  );
};

export default EditProduct;