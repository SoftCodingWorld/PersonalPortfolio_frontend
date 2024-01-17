import * as React from 'react';
import { AppBar, Toolbar, Button, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {
    const theme = useTheme();

    return (
        <AppBar position='fixed'>
            <Toolbar sx={{ justifyContent: 'center', pr: '24px', }}>
                <Avatar
                    sx={{ bgcolor: theme.palette.secondary.main,mr:2 }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    VP
                </Avatar>
                <Button sx={{ fontWeight: 'bold', color: 'inherit' }} href="/">Home</Button>
                <Button sx={{ fontWeight: 'bold', color: 'inherit' }} href="/resume" >Resume</Button>
                <Button sx={{ fontWeight: 'bold', color: 'inherit' }} href="/projects" >Projects</Button>
                <Button sx={{ fontWeight: 'bold', color: 'inherit' }} href="/Connect" >Connect</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;