import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/AppNavBar";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import EcommercePage from "./pages/EcommercePage";
import StudentPage  from "./pages/StudentPage";
import HomePage from "./pages/HomePage";
import ProductManagePage from "./pages/ProductManagePage";
import NotFound from "./components/NotFound";
import Cart from "./components/projects/ecommerce/Cart";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles";
import { Dashboard } from "@mui/icons-material";

export default function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
          <Routes>
            <Route index element={<HomePage />} /> 
            <Route path="/"  exact element={<HomePage />} />
            <Route path="/resume" exact element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} >
              <Route index element={<Dashboard />} /> 
              <Route path="product-management" element={<ProductManagePage/>} />
              <Route path="studentcrud" element={< StudentPage />} />
              <Route path="ecommerce" element={<EcommercePage />} />
              <Route path="cart" exact element={<Cart />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </ThemeProvider>
    </div>
  );
};