import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import Sidebar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/actions";
import { Outlet } from "react-router-dom";

const Projects = () => {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const handleItemClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar onItemClick={handleItemClick} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">{currentPage}</Typography>
        <Outlet /> {/* This will render the child route component */}
      </Box>
    </Box>
  );
};

export default Projects;
