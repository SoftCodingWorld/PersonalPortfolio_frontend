import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import theme from '../../styles';

const ProfileCard = () => {
    const profileInfo = {
        name: 'Vicky Pang',
        title: 'Software Developer | QA',
        email: 'vicky.pang.ca@gmail.com',
        phone: '(+1) 647-212-8389',
        address: 'Ottawa, ON Canada',
    };

    return (
        <Box sx={{ bgcolor: theme.palette.secondary.main, p: 2, color: 'text.primary' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar
                    sx={{ width: 128, height: 128, mb: 1, color: 'text.primary' }}
                    src="/images/vicky.jpeg"
                    alt={profileInfo.name}
                />
                <Paper
                    sx={{
                        width: '100%',
                        bgcolor: '#1976d2', 
                        color: 'primary.contrastText', 
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6" >
                        Contact
                    </Typography>
                </Paper>
            </Box>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <EmailIcon sx={{ color: '#1976d2' }} />
                    </ListItemIcon>
                    <ListItemText primary={profileInfo.email} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PhoneIcon sx={{ color: '#1976d2' }} />
                    </ListItemIcon>
                    <ListItemText primary={profileInfo.phone} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <HomeIcon sx={{ color: '#1976d2' }} />
                    </ListItemIcon>
                    <ListItemText primary={profileInfo.address} />
                </ListItem>
            </List>
        </Box>
    );
};

export default ProfileCard;