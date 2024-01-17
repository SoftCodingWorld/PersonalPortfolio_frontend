import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

console.log("api:",API_BASE_URL);

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // Optional: sets timeout in ms
});
//function to fetch all products
export async function fetchProducts() {
  try {
    const response = await apiClient.get(`/products`);
    console.log("data:", response.data);
    return response.data;
  } catch (e) {
    console.error("Error fetching products:", e);
    throw e;
  }
}

//function to add a new product
export async function addProduct(newItem) {
  try {
    const response = await apiClient.post(`/products`, newItem);
    return response.data;
  } catch (error) {
    console.error("Error adding new item:", newItem, error);
    throw error;
  }
}

// Function to update a product by ID
export async function updateProduct(productId, updatedItem) {
  try {
    const response = await apiClient.put(`/products/${productId}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', productId, error);
    throw error;
  }
}

//function to remove a product by ID
export async function removeProduct(productId) {
  try {
    const response = await apiClient.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to remove the product:", productId, error);
    throw error;
  }
}

//function to get all categories
export async function fetchCategories() {
  try {
    const response = await apiClient.get(`/products/categories`);
    return response.data;
  } catch (error) {
    console.error("Failed to get the category:", error);
    throw error;
  }
}

const productService = {
  fetchProducts,
  addProduct,
  updateProduct,
  removeProduct,
  fetchCategories
};

export default productService;