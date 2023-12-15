import React from 'react';
import './ExperinceView.css';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { experinceData } from '../../data/Data';

const ExperinceView = () => {
  return (
    <Box sx={{ p: 2, mt: 2 }}>
      <Box sx={{}}>
        <Typography variant='h4' fontWeight={600} sx={{ color: '#1d529a' }}>
          Experince Something New
        </Typography>
        <br />
        <Typography
          fontWeight={600}
          sx={{ color: 'black', fontSize: '1.25rem' }}
        >
          Fall into a relaxing stay with one of our exclusive offers.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {experinceData &&
          experinceData.map((data, index) => (
            <Grid item md={4} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  // p: '4px',
                  zIndex: 0.5,
                 
                }}
              >
                <Box
                  // sx={{
                  //   background: `linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${data.url}) `,
                  //   height: 280,objectFit: 'cover'
                  // }}
                >
                  <CardMedia
                    component='img'
                    image={data.url}
                    alt={data.name}
                    sx={{
                      height: 280,
                      objectFit: 'cover',
                      
                    
                  
                    }}
                  />
                </Box>
                <Box className='overlay-text'>
                  <Typography variant='h5' sx={{ mt: 5, fontWeight: 700 }}>
                    {data.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ExperinceView;
