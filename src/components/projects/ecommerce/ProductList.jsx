import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsFetchAsync } from "../../slices/productSlice";
import MyPaginationComponent from "../../Pagination";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
  Button,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { addToCart, getTotals } from "../../slices/cartSlice";
import StarsIcon from "@mui/icons-material/Stars";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { fetchCategories } from "../../../services/productService";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ProductList() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const productsFromRedux = useSelector((state) => state.products.products);
  console.log("list:", productsFromRedux);
  const products = useMemo(() => productsFromRedux || [], [productsFromRedux]);
  console.log("products:", products);

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const cart = useSelector((state) => state.cart);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Debounce search query
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // 500 ms delay

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  useEffect(() => {
    let isMounted = true;
    dispatch(productsFetchAsync());
    const fetchCategoryData = async () => {
      try{
        const fetchedCategories = await fetchCategories();
        if (isMounted) {
          setCategories(fetchedCategories);
        }
      }catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategoryData();
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  // Add a useEffect hook to update filteredProducts when products change
  useEffect(() => {
    let updatedProducts = products;

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by search query
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  }, [products, selectedCategories, debouncedQuery, searchQuery]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    console.log(`add "${product.title}" to cart`);
    dispatch(addToCart(product));
  };

  const handleCategoryClick = (category) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedSelectedCategories);
    setCurrentPage(1);

    // Update the filtered products using the updated selected categories
    if (updatedSelectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          updatedSelectedCategories.includes(product.category)
        )
      );
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts && Array.isArray(filteredProducts) ? filteredProducts.slice(startIndex, endIndex) : [];
  console.log("currentProducts:", currentProducts);
  const isProductListEmpty = currentProducts.length === 0;

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          marginBottom: 4,
          alignContent: "center",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </Search>

        <Divider />
        <Button
          variant="contained"
          sx={{
            backgroundColor:
              selectedCategories.length === 0
                ? theme.palette.secondary.main
                : "white",
            color:
              selectedCategories.length === 0
                ? "white"
                : theme.palette.secondary.main,
          }}
          onClick={() => setSelectedCategories([])}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant="contained"
            sx={{
              backgroundColor: selectedCategories.includes(category)
                ? theme.palette.secondary.main
                : "white",
              color: selectedCategories.includes(category)
                ? "white"
                : theme.palette.secondary.main,
            }}
            onClick={() => handleCategoryClick(category)}
          >
            {category.toUpperCase()}
          </Button>
        ))}
      </Box>

      { isProductListEmpty ? (
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="left"
          sx={{ my: 4 }}
        >
          No products found.
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="flex-start">
          {currentProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 140,
                    objectFit: "contain",
                    width: "100%",
                  }}
                  image={product.image}
                  alt={product.title}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    noWrap
                    sx={{ height: "3em", color: "text.primary" }}
                  >
                    {product.title}
                  </Typography>
                  <Box
                    sx={{
                      mt: "auto",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="body1" color="text.primary">
                      ${product.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      <StarsIcon sx={{ mt: 1, mr: 1 }} />
                      {product.rating.rate}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{ color: "#1976d2", fontWeight: "bold" }}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Adjust as needed for your design
          alignItems: "center",
          width: "100%", // Ensures it takes full width
          marginBottom: 2, // Adds some space below the pagination bar
        }}
      >
        <Select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          displayEmpty
          sx={{
            m: 1,
            minWidth: 120,
            color: theme.palette.secondary.main,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main", // Border color for the outlined variant
            },
          }}
          size="small" // Ensures the select has a consistent width
        >
          <MenuItem value={5} sx={{ color: theme.palette.secondary.main }}>
            5
          </MenuItem>
          <MenuItem value={8} sx={{ color: theme.palette.secondary.main }}>
            8
          </MenuItem>
          <MenuItem value={10} sx={{ color: theme.palette.secondary.main }}>
            10
          </MenuItem>
          <MenuItem value={20} sx={{ color: theme.palette.secondary.main }}>
            20
          </MenuItem>
        </Select>

        {!isProductListEmpty && (
          <MyPaginationComponent
            totalCount={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        )}
      </Box>
    </Box>
  );
}

export default ProductList;
