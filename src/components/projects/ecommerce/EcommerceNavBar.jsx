import { Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import theme from "../../../styles";
import { useNavigate } from "react-router-dom";

const EcommerceNavBar = () => {
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  console.log({ cartTotalQuantity });

  const handleCartIconClick = () => {
    navigate("/projects/cart"); // Update with your cart page route
  };

  return (
    <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
      {/* "OnlineShop" text */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          flexGrow: 1,
          color: theme.palette.secondary.main,
          font: "bold",
          mr: 2,
        }}
      >
        OnlineShopping
      </Typography>

      {/* Space filler to push the icon to the right */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Shopping bag icon */}
      <IconButton aria-label="cart" onClick={handleCartIconClick}>
        <Badge
          badgeContent={cartTotalQuantity}
          sx={{ color: theme.palette.secondary.main }}
        >
          <ShoppingCartOutlinedIcon
            sx={{ color: theme.palette.secondary.main, width: 35, height: 35 }}
          />
        </Badge>
      </IconButton>
    </Toolbar>
  );
};

export default EcommerceNavBar;
