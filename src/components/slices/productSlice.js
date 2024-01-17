import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../../services/productService";

const initialState = {
  products: [], 
  categories: [],
  cart: [],
  status: null,
  error: null,
  loading: false,
};

export const productsFetchAsync = createAsyncThunk(
  "products/productsFetchAsync",
  async () => {
    try {
      const response = await productService.fetchProducts();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const updateProductAsync = createAsyncThunk(
  `products/updateProduct`,
  async ({ productId, updatedData }, { rejectWithValue }) => {
    try {
      const updatedProduct =  await productService.updateProduct(productId, updatedData);
      return updatedProduct;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const removeProductAsync = createAsyncThunk(
  `products/removeProduct`,
  async ({ productId }, { rejectWithValue }) => {
    try {
     await productService.removeProduct(productId);
      return productId;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProductInState: (state, action) => {
      state.products.updateProduct(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsFetchAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productsFetchAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(productsFetchAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateProductAsync.pending, (state, action) => {
        state.updateStatus = "loading";
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        const { productId, updatedData } = action.meta.arg;
        const index = state.products.findIndex(
          (product) => product.id === productId
        );
        if (index !== -1) {
          state.products[index] = { ...state.products[index], ...updatedData };
        }
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
        state.updateStatus = "rejected";
        state.updateError = action.error.message;
      })
      .addCase(removeProductAsync.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});
export const { setProducts, addProduct, updateProductInState, removeProduct } =
  productSlice.actions;
export default productSlice.reducer;
