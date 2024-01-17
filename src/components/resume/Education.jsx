import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';

const educationData = [
    {
        degree: "Diploma's Degree",
        fieldOfStudy: "Computer Programming",
        institution: "Algonquin College",
        period: "2022 - 2023",
    },
    {
        degree: "Master's Degree",
        fieldOfStudy: "Software Engineering",
        institution: "Beijing University",
        period: "2011 - 2014",
    },
    {
        degree: "Bachelor's Degree",
        fieldOfStudy: "Information and Computer Science",
        institution: "Jiangnan University",
        period: "2011 - 2014",
    },
];

const Education = () => {
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
                        Education
                    </Typography>
                </Paper>
            </Box>
            <List sx={{ position: 'relative', }}>
                {educationData.map((edu, index) => (
                    <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
                        <SchoolIcon sx={{ color: '#1976d2', p: 2, mr: 2, ml: -2.5 }} />

                        <ListItemText
                            primary={`${edu.degree} in ${edu.fieldOfStudy}`}
                            secondary={
                                <Typography component="span" variant="body2" sx={{ color: 'primary.main', fontFamily: 'italic' }}>
                                    {`${edu.institution}, ${edu.period}`}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
export default Education;