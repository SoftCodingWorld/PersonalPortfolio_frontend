import React from 'react';
import { Typography, Box, LinearProgress, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Profile = () => {
  const theme = useTheme();
  const profileText = `As a seasoned Software Developer Engineer in Test with over 10 years of experience in quality assurance and software testing, I specialize in backend service testing within Service-Oriented Architecture frameworks. My expertise encompasses functional testing, API testing using Java and Postman, and performance testing with tools like JMeter. I am proficient in Python and SQL for test automation and data analysis, ensuring system reliability and efficiency. My notable achievements include leading high-impact projects, optimizing marketing systems, and significantly contributing to sales growth in fast-paced, tech-driven environments.`;

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="h6" sx={{ p:2,fontWeight: 'bold', flexGrow: 1 , color: theme.palette.secondary.main}}>
        Profile
      </Typography>
      <Box sx={{ width: '80%', mr: 1 }}>
        <LinearProgress variant="determinate" value={1} sx={{ height: 10, borderRadius: 5, backgroundColor: theme.palette.secondary.main }} />
      </Box>
      </Stack>
      <Typography variant="subtitle1" sx={{ p:2,fontFamily: 'italic',flexGrow: 1 , color: theme.palette.secondary.main}}>
      { profileText }
      </Typography>
    </Box>
  );
};

export default Profile;