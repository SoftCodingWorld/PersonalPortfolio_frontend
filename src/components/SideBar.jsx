import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Box,
} from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Sidebar = ({ onItemClick }) => {
  const drawerWidth = 240;
  const theme = useTheme();
  const appBarHeight = theme.mixins.toolbar.minHeight;
  const [activeItem, setActiveItem] = useState("ecommerce"); // default active item
  const navigate = useNavigate();

  const handleItemClick = (page) => {
    setActiveItem(page);
    navigate(`/projects/${page}`);
  };

  console.log("active:", activeItem);

  return (
    <Drawer
      // open={isOpen}
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          mt: `${appBarHeight}px`,
          bgcolor: theme.palette.secondary.main,
          // height: `calc(100% - ${appBarHeight}px)`,
        },
      }}
    >
      <Toolbar />

      <Divider />
      <Box sx={{ overflow: "auto", bgcolor: theme.palette.secondary.main }}>
        <React.Fragment>
          <List>
            <ListItem
              button
              onClick={() => handleItemClick("ecommerce")}
              selected={activeItem === "E-commerce"}
            >
              <ListItemIcon>
                <ShoppingCartIcon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText
                primary="E-commerce"
                sx={{
                  color: activeItem === "E-commerce" ? "#1976d2" : "inherit", // Change text color conditionally
                }}
              />
            </ListItem>
            <ListItem button onClick={() => handleItemClick("product-management")}   selected={activeItem === "ProductManagement"}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText primary="ProductManagement" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick("studentcrud")}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText primary="Student_CRUD" />
            </ListItem>
            <ListItem button onClick={() => handleItemClick("customers")}>
              <ListItemIcon>
                <PersonIcon sx={{ color: "#1976d2" }} />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            {/* Add more sidebar items as needed */}
          </List>
        </React.Fragment>
        <React.Fragment>
          <ListSubheader component="div" inset>
            Saved reports
          </ListSubheader>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Current month" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
          </ListItemButton>
        </React.Fragment>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
