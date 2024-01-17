import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarsIcon from "@mui/icons-material/Stars";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  getTotals,
  clearCart,
} from "../../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";

const ShoppingCart = () => {
  const theme = useTheme();
  const cart = useSelector((state) => state.cart);
  console.log("cart:", cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleClearCart = () => {
    console.log("clear cart");
    dispatch(clearCart());
  };

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ flexGrow: 1, color: theme.palette.secondary.main, font: "bold", mr: 4, mb: 4 }}
      >
        Shopping Cart
      </Typography>

      {cart.cartItems.length === 0 ? (
        <Box>
          <Typography sx={{ color: theme.palette.secondary.main }}>
            Your cart is currently empty
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component={Link}
              to="/projects/ecommerce"
              sx={{ mr: 1 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Button
              component={Link}
              to="/projects/ecommerce"
              startIcon={
                <ShoppingCartIcon
                  sx={{ color: theme.palette.secondary.main }}
                />
              }
            >
              Start Shopping
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Button
            variant="contained"
            sx={{
              mt: 1,
              bgcolor: theme.palette.secondary.main,
              color: "white",
            }}
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </Button>
          <Grid
            container
            spacing={2}
            sx={{
              my: 2,
              fontWeight: "bold",
            }}
          >
            <Grid item xs={4}>
              <Typography
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  textAlign: "center",
                }}
              >
                Product
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  textAlign: "center",
                }}
              >
                Price
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  textAlign: "center",
                }}
              >
                Quantity
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  textAlign: "center",
                }}
              >
                Total
              </Typography>
            </Grid>
          </Grid>
          {cart.cartItems.map((cartItem) => (
            <Grid
              container
              key={cartItem.id}
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  src={cartItem.image}
                  alt={cartItem.name}
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box flex={1}>
                  <Typography sx={{ color: theme.palette.secondary.main }}>
                    {cartItem.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    <StarsIcon sx={{ mt: 2, mr: 1 }} />
                    {cartItem.rating.rate}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  sx={{
                    color: theme.palette.secondary.main,
                    textAlign: "center",
                  }}
                >
                  ${cartItem.price}
                </Typography>
              </Grid>
              <Grid item xs={3} container sx={{ justifyContent:"center",display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => handleDecreaseCart(cartItem)}>
                  <RemoveIcon />
                </IconButton>
                <Typography
                  sx={{
                    mx: 2,
                    color: theme.palette.secondary.main,
                    textAlign: "center",
                  }}
                >
                  {cartItem.cartQuantity}
                </Typography>
                <IconButton onClick={() => handleAddToCart(cartItem)}>
                  <AddIcon />
                </IconButton>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  sx={{
                    color: theme.palette.secondary.main,
                    textAlign: "center",
                  }}
                >
                  ${(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          ))}
          <Divider sx={{ mt: 2 }} />
          <Box sx={{ mt: 4 }}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                Subtotal({cart.cartQuantity}Items): ${cart.cartTotalAmount}
              </Typography>
              <Typography variant="body2">
                * Taxes and shipping calculated at checkout
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: theme.palette.secondary.main,
                  color: "white",
                }}
              >
                Check out
              </Button>
              <Box sx={{ display: "flex", alignItems: "center", mt: 8 }}>
                <IconButton component={Link} to="/projects/ecommerce" sx={{ mr: 1 }}>
                  <ArrowBackIcon />
                </IconButton>
                <Button
                  component={Link}
                  to="/projects/ecommerce"
                  startIcon={<ShoppingCartIcon />}
                >
                  Continue Shopping
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ShoppingCart;