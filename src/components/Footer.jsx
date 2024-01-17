import React from 'react';
import { Box, Container, Typography, Link, Grid, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 0 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link to="/home" color="text.secondary">Home</Link></li>
              <li><Link to="/projects" color="text.secondary">Projects</Link></li>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Me
            </Typography>
            <Stack direction="row" spacing={2}>
            <Link href="mailto:vicky.pang.ca@gmail.com" color="text.secondary">
                <EmailIcon />
            </Link>
            <Link href="tel:+16472128389" color="text.secondary">
                <PhoneIcon />
            </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Me
            </Typography>
            <Stack direction="row" spacing={2}>
                <Link href="https://www.linkedin.com/in/vicky-pang-791000248/" color="text.secondary">
                    <LinkedInIcon />
                </Link>
                <Link href="https://github.com/yourusername" color="text.secondary"> {/* Replace with your GitHub URL */}
                    <GitHubIcon />
                </Link>
            </Stack>
        </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Vicky Pang
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;