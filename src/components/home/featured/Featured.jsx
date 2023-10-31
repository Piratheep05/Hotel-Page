import React from 'react';
import './Featured.css';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import { experinceData } from '../../data/Data';

const Featured = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ p: 1, ml: 1 }}>
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
      <Grid container>
        {experinceData.map((data, index) => {
          return (
            <Grid item md={4}>
              <Box sx={{ position: 'relative', textAlign: 'center', p: '4px' }}>
                <>
                  <Box>
                    <CardMedia
                      component='img'
                      image={data.url}
                      alt='Paella dish'
                      sx={{
                        height: 280,
                      }}
                    />
                  </Box>
                  <Box className='overlay-text'>
                    <Typography variant='h5' sx={{ mt: 5, fontWeight: 700 }}>
                      {data.name}
                    </Typography>
                  </Box>
                </>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Featured;
