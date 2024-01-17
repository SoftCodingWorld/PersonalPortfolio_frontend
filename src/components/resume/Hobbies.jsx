import React from 'react';
import { Box, Typography, Grid, IconButton, Paper } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import { useTheme } from '@emotion/react';

const Hobbies = () => {
  const hobbyData = [
    { icon: <FitnessCenterIcon />, label: 'Fitness' },
    { icon: <SportsTennisIcon />, label: 'tennis' },
    { icon: <DownhillSkiingIcon />, label: 'Skiing' },
  ];

  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.secondary.main, p: 2, color: 'text.primary' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper
          sx={{
            width: '100%',
            bgcolor: '#1976d2',
            color: 'primary.contrastText',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" >
            Hobbies
          </Typography>
        </Paper>
      </Box>
      <Grid container spacing={2}>
        {hobbyData.map((hobby, index) => (
          <Grid item key={index} xs={6} sm={3} sx={{ color: theme.palette.primary.main, ml: 2, mt: 2 }}>
            <IconButton color="primary" aria-label={hobby.label}>
              {hobby.icon}
            </IconButton>
            <Typography variant="caption" display="block" gutterBottom>
              {hobby.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hobbies;