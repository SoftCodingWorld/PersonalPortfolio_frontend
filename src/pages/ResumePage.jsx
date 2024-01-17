import React from 'react';
import { useTheme } from '@mui/material/styles';
import ProfileCard from '../components/resume/ProfileCard';
import Education from '../components/resume/Education';
import Hobbies from '../components/resume/Hobbies';
import WorkExperience from '../components/resume/Experience';
import TechSkills from '../components/resume/TechSkills';
import Header from '../components/resume/Header';
import Profile from '../components/resume/Profile';
import { Divider, Grid, Paper } from '@mui/material';
import Footer from '../components/Footer';

const Resume = () => {
  const theme = useTheme();
  const appBarHeight = theme.mixins.toolbar.minHeight;

  return (
    <Paper sx={{
      maxWidth: 1024, margin: 'auto', overflow: 'hidden', bgcolor: theme.palette.secondary.main, mt: `${appBarHeight}px`,
    }}>
      <Grid container>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <ProfileCard />
          <Education />
          <TechSkills />
          <Hobbies />
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Header />
          <Divider />
          <Profile />
          <WorkExperience />
        </Grid>
      </Grid>
      <Footer />
    </Paper>
  );
};

export default Resume;