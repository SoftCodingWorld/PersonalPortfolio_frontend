import React from 'react';
import { Box, Typography, LinearProgress, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Skill data structure
const skills = [
    { name: 'Python', level: 75 },
    { name: 'Java', level: 75 },
    { name: 'SQL', level: 75 },
    { name: 'JMeter', level: 75 },
    { name: 'Docker', level: 75 },
    { name: 'Git', level: 75 },
    { name: 'YAML', level: 75 },
    { name: 'JavaScript', level: 40 },
    { name: 'React', level: 70 },
    { name: 'Angular/Ioninc', level: 75 },
];

const Skills = () => {
    const theme = useTheme();
    return (
        <Box sx={{ bgcolor: theme.palette.secondary.main, p: 2, color: 'text.primary' }}>
            <Box sx={{
                width: '100%',
                bgcolor: '#1976d2',
                color: 'primary.contrastText', 
                textAlign: 'center',
                mb: 2
            }}>
                <Typography variant="h6">
                    Skills
                </Typography>
            </Box>
            {skills.map((skill, index) => (
                <Box key={index} sx={{ mb: 2,ml:2 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="body1" >
                            {skill.name}
                        </Typography>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <LinearProgress variant="determinate" sx={{ color: theme.palette.primary.main }} value={skill.level} />
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.main }}></Typography>
                    </Stack>
                </Box>
            ))}
        </Box>
    );
};

export default Skills;