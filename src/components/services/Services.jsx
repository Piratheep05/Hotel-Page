import { Box, Typography } from '@mui/material';
import React from 'react';

const Services = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h5'>Rooms & Suites</Typography>
      </Box>
      <Box sx={{p:4}}>
        <img
          src='https://sitecore-cd-imgr.shangri-la.com/MediaFiles/7/8/6/{7862A916-83F1-4AA1-8D47-F1E0A1CA4EA1}4.-Deluxe-Room----bathroom.jpg'
          alt='Rooms'
        />
      </Box>
    </>
  );
};

export default Services;
