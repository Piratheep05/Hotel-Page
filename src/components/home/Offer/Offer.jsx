import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  CardContent,
} from '@mui/material';
import { offerData } from '../../data/Data';

const Offers = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box>
        <Typography variant='h4' align='center' sx={{ color: '#333' }}>
          Offers
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {offerData && offerData.map((data,index) => (
            <Grid item md={4} key={index} display="flex" justifyContent="center" alignItems="center">
              <Card sx={{ maxWidth: '360px', height: '450px' }}>
                <CardMedia
                  sx={{ height: '175px' }}
                  image={data.img}
                  title='green iguana'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='body2'
                    component='div'
                    align='center'
                  >
                    {data.name}
                  </Typography>
                  {data.date && (
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      align='center'
                    >
                      {data.date}
                    </Typography>
                  )}
                  <br />
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    align='center'
                    fontWeight={800}
                  >
                    {data.MainHead}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    align='center'
                  >
                    {data.SubHead}
                  </Typography>
                  <br />
                  {data.price && (
                    <Typography align='center' sx={{ mt: 1 }}>
                      From{' '}
                      <span style={{ fontWeight: 'bold' }}>{data.price}</span>
                      Average Per Night
                    </Typography>
                  )}
                </CardContent>
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    variant='outlined'
                    sx={{
                      color: '#876a20',
                      border: '1px solid #876a20',
                      fontWeight: 700,
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Offers;
