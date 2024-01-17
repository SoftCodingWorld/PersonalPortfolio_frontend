import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  
  const headerData = {
    name: 'Vicky Pang',
    title: 'Software Developer | QA',
    avatarUrl: '/images/broken-image.jpg', // Replace with path to your avatar image
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', color: theme.palette.secondary.main, p: 2,}}>
      <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
        <Grid item xs>
          <Box display= "flex" alignItems="center" justifyContent="space-between">
            <Box>
          <Typography variant="h4" component="h1" sx={{ color: theme.palette.secondary.main }} gutterBottom>
            {headerData.name}
          </Typography>
          <Typography variant="h6">
            {headerData.title}
          </Typography>
          </Box>
          {/* <Button variant="contained" sx={{ mt: 8, fontWeight: 'bold' }}>
                            Download PDF
          </Button> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;