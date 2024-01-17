import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';
import RemoveProductButton from './RemoveProductButton';

const ProductTable = ({ products, onAddProduct, onProductEdit, onProductRemove }) => {
    if (!products || !Array.isArray(products)) {
        return <div>Loading...</div>;
    }
    console.log("products:", products);
  return (
    <Box>
      <Button onClick={onAddProduct} color="primary" variant="contained">Add New Product</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <Button onClick={() => onProductEdit(product)} color="primary">Edit</Button>
                <RemoveProductButton productId={product.id} onRemove={onProductRemove} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

ProductTable.defaultProps = {
    products: [],
};

export default ProductTable;