import React from "react";
import { Box, Toolbar } from "@mui/material";
import ProductList from "../components/projects/ecommerce/ProductList";
import EcommerceNavBar from "../components/projects/ecommerce/EcommerceNavBar";
import { Outlet } from "react-router-dom";

const EcommercePage = () => {
  return (
    <div>
      <EcommerceNavBar />

      <Box sx={{ display: "flex", height: "100vh" , alignItems: "flex-start"}}>

        {/* Main content area */}
        <Box component="main" sx={{ flexGrow: 1, p: 1, display: "flex", alignContent: "center"}}>
          <Toolbar />
        </Box>
        <ProductList />
        <Outlet/>
      </Box>
    </div>
  );
};

export default EcommercePage;