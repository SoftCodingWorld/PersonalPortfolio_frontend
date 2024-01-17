import React, { useState } from "react";
import { Pagination, useTheme } from "@mui/material";

function MyPaginationComponent({ totalCount, itemsPerPage, onPageChange }) {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const count = Math.ceil(totalCount / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <Pagination variant="outlined" count={count} page={page} onChange={handleChange} sx={{ color: theme.palette.secondary.main, mt:4 }} />
  );
}

export default MyPaginationComponent;