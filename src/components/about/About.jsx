import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant='h4'>About Us</Typography>
      </Box>
      <img
        src='https://sitecore-cd.shangri-la.com/-/media/Shangri-La/colombo_shangrila/about/SLCB-Tropical-Sanctuary.jpg'
        alt=''
      />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>A new level of luxury</Typography>
        <Typography variant='h5'>in the heart of Colombo</Typography>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Typography sx={{fontSize:'14px'}}>
          Nestled amidst the oceanfront entertainment, shopping & commercial
          precincts of the city, Shangri-La Colombo offers elevated luxury in
          the heart of the city. From unparalleled culinary experiences to
          convenient business facilities and family-friendly staycations,
          immerse yourself in a place of quiet discovery here in the city. View
          our factsheet here.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
