import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetchAsync, removeProductAsync } from "../components/slices/productSlice";
import AddProduct from "../components/projects/ecommerce/AddProduct";
import EditProduct from "../components/projects/ecommerce/EditProduct";
import ProductTable from "../components/projects/ecommerce/ProductTable";

const ProductManagementPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);

  useEffect(() => {
    dispatch(productsFetchAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAddProductClose = () => {
    setShowAddProduct(false);
    dispatch(productsFetchAsync());
  };

  const handleEditProductClose = () => {
    setShowEditProduct(false);
    dispatch(productsFetchAsync());
  };

  const handleProductEdit = (product) => {
    setSelectedProduct(product);
    setShowEditProduct(true);
  };

  const handleProductRemove = async (productId) => {
    await dispatch(removeProductAsync(productId));
    dispatch(productsFetchAsync());
  }

  return (
    <div>
      <h1>Product Management</h1>
      <ProductTable
        products={products}
        onAddProduct={() => setShowAddProduct(true)}
        onProductEdit={handleProductEdit}
        onProductRemove={handleProductRemove}
      />
      {/* Additional UI for adding/updating products */}
      {showAddProduct && <AddProduct onClose={handleAddProductClose} />}
      {showEditProduct && (
        <EditProduct
          product={selectedProduct}
          onClose={handleEditProductClose}
        />
      )}
    </div>
  );
};

export default ProductManagementPage;