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

const Recent = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Box>
        {' '}
        <Typography variant='h4' align='center' sx={{ color: '#333' }}>
          Offers
        </Typography>
      </Box>
      <Box sx={{ mt: 4, ml: 6 }}>
        <Grid container spacing={1}>
          <Grid item md={4}>
            <Card sx={{ maxWidth: '360px', height: '450px' }}>
              <CardMedia
                sx={{ height: '175px' }}
                image='https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/{32926B10-8EE8-4639-B2DD-AC55F70CB76D}slcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both'
                title='green iguana'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body2'
                  component='div'
                  align='center'
                >
                  Rooms & Suites
                </Typography>
                <br />
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                  fontWeight={800}
                >
                  Shangri–La Circle Exclusive Member Rate with Breakfast
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                >
                  Exclusive Member Rate with Breakfast for Shangri-La Circle
                  member.
                </Typography>
                <br />
                <Typography align='center' sx={{ mt: 1 }}>
                  From <span style={{ fontWeight: 'bold' }}>LKR 58,955.40</span>{' '}
                  Average Per Night
                </Typography>
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
          <Grid item md={4}>
            <Card sx={{ maxWidth: '360px', height: '450px' }}>
              <CardMedia
                sx={{ height: '175px' }}
                image='https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/{A8B2E679-6D4A-497F-95C4-A905821952F5}slcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both'
                title='green iguana'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body2'
                  component='div'
                  align='center'
                >
                  Rooms & Suites
                </Typography>
                <br />
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                  fontWeight={800}
                >
                  Shangri–La Circle Exclusive Member Rate with Breakfast
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                >
                  Exclusive Member Rate with Breakfast for Shangri-La Circle
                  member.
                </Typography>
                <br />
                <Typography align='center' sx={{ mt: 1 }}>
                  From <span style={{ fontWeight: 'bold' }}>LKR 58,955.40</span>{' '}
                  Average Per Night
                </Typography>
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
          <Grid item md={4}>
            <Card sx={{ maxWidth: '360px', height: '450px' }}>
              <CardMedia
                sx={{ height: '175px' }}
                image='https://sitecore-cd-imgr.shangri-la.com/MediaFiles/9/A/D/{9AD4CFE8-6C22-4DA5-8993-225995891A29}SLCB-Swimming in Pool - 1920 x 940.jpg?w=360&h=175&mode=crop&quality=100&scale=both'
                title='green iguana'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='body2'
                  component='div'
                  align='center'
                >
                  Rooms & Suites
                </Typography>
                <br />
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                  fontWeight={800}
                >
                  Shangri–La Circle Exclusive Member Rate with Breakfast
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                >
                  Exclusive Member Rate with Breakfast for Shangri-La Circle
                  member.
                </Typography>
                <br />
                <Typography align='center' sx={{ mt: 1 }}>
                  From <span style={{ fontWeight: 'bold' }}>LKR 58,955.40</span>{' '}
                  Average Per Night
                </Typography>
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
        </Grid>
      </Box>
    </Box>
  );
};

export default Recent;
