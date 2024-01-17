import React from 'react';
import { Box, Paper, Typography, LinearProgress, Stack } from '@mui/material';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Timeline from '@mui/lab/Timeline';
import { useTheme } from '@mui/material/styles';

const WorkExperienceTimeline = () => {
    const theme = useTheme();
    const experiences = [
        {
            jobTitle: "IT Developer",
            company: "Nokia",
            duration: "Jan 2023 - Dec 2023",
            location: "Canada",
            responsibilities: "Developed scripts to automate network protocols and firewall configurations, improving operational efficiency. Collaborated across teams to resolve issues, enhancing cross-functional teamwork" },
        // ... add more experiences here
        {
            jobTitle: "SDET",
            company: "ele.me - Alibaba",
            duration: "Jan 2020 - March 2022",
            location: "China",
            responsibilities: "Spearheaded backend service testing in marketing, optimizing processes for discounts, coupons, and pricing strategies. Enhanced system performance and data integrity, and led projects contributing significantly to sales growth." },
        {
            jobTitle: "SDET",
            company: "JD.com",
            duration: "Oct 2017 - Oct 2019",
            location: "China",
            responsibilities: "Focused on testing supply chain solutions, ensuring quality in SKU management and smart logistics. Automated tests and data retrieval for supply chain management systems."},
        {
            jobTitle: "SDET",
            company: "Nagra",
            duration: "Jan 2014 - Sept 2017",
            location: "China",
            responsibilities: "Conducted end-to-end integration testing for Electronic Program Guide systems, advancing from Junior to Senior Engineer. Utilized Selenium, JIRA, and Jenkins in Agile-Scrum environments."},
    ];

    return (
        <Box sx={{ bgcolor: theme.palette.primary.main }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ bgcolor: theme.palette.primary.main }}>
                <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold', flexGrow: 1, color: theme.palette.secondary.main, bgcolor: theme.palette.primary.main }}>
                    Experience
                </Typography>
                <Box sx={{ width: '80%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={1} sx={{ height: 10, borderRadius: 5, backgroundColor: theme.palette.secondary.main }} />
                </Box>
            </Stack>
            <Timeline sx={{ bgcolor: theme.palette.primary.main }}>
                {experiences.map((experience, index) => (
                    <TimelineItem key={index} sx={{ '&::before': { flex: 0, padding: 0 } }}>
                        <TimelineSeparator>
                            <TimelineDot sx={{ bgcolor: theme.palette.secondary.main }} >
                                <Typography variant="caption" sx={{ color: 'white' }}>
                                    {experience.duration.split(' - ')[0]} {/* Extracting the start year */}
                                </Typography>
                            </TimelineDot>
                            {index !== experiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2, textAlign: 'left' }}>
                            <Paper elevation={3} sx={{ p: 2, bgcolor: '##535777' }}>
                                <Typography variant="h6" component="h1">
                                    {experience.jobTitle}
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>{experience.company}</Typography>
                                <Typography sx={{ color: "text.secondary" }}>{experience.duration}, {experience.location}</Typography>
                                <Typography sx={{ color: "text.secondary" }}>{experience.responsibilities}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
};

export default WorkExperienceTimeline;