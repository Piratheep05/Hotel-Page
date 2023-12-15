import React from 'react';
import { footer } from '../../data/Data';
import {
  Box,
  CardActions,
  Grid,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  Typography,
  FormControlLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImYoutube2 } from 'react-icons/im';
import { IoIosArrowForward } from 'react-icons/io';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Radio from '@mui/material/Radio';

const Footer = () => {
  const theme = useTheme();
  //console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  // console.log(isMatch);

  return (
    <Box>
      <Box sx={{}}>
        <Box sx={{ position: 'relative' }}>
          <img
            src='https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/book-bottom.jpg'
            alt='footerimg3'
            style={{ width: '100%' }}
          />

          <Box sx={{ position: 'absolute', mt: '-90px' }}>
            <img
              src='https://www.cinnamonhotels.com/themes/cinnamon/images/footer-bg.png'
              alt='footerImg2'
            />
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            p: 1,
            mt: -15,
          }}
        >
          <Box sx={{ flexGrow: 1 }} />

          <Button
            sx={{
              backgroundColor: '#686fa5',
              textAlign: 'center',
              textTransform: 'none',
              color: '#fff',
              width: 128,
              height: 128,
              top: '-60px',
              borderRadius: '50%',
              '&:hover': {
                backgroundColor: '#686fa5',
              },
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Stack>
              <IconButton sx={{ color: '#fff', mt: -2 }}>
                {' '}
                <KeyboardArrowUpIcon />
              </IconButton>
              <Typography>Scroll up</Typography>
            </Stack>
          </Button>
        </Box>
        <Grid container columnSpacing={1}>
          {footer &&
            footer.map((item, index) => (
              <Grid item xs={6} md={3.5} key={index}>
                <Box sx={{ ml: 2, p: 1 }}>
                  <List
                    subheader={
                      <ListSubheader
                        sx={{
                          color: '#77328b',
                          fontSize: '25px',
                          fontStyle: 'BodoniStd-BookItalic',
                        }}
                        id='nested-list-subheader'
                      >
                        {item.title}
                      </ListSubheader>
                    }
                  >
                    <Typography color='text.secondary'>
                      {item.text &&
                        item.text.map((item, index) => (
                          <ListItem key={index}>{item.list}</ListItem>
                        ))}
                    </Typography>
                  </List>
                </Box>
              </Grid>
            ))}
          <Grid item xs={6} md={6}>
            <Box sx={{ textAlign: 'center', ml: 39, mt: 5 }}>
              <Typography sx={{ color: '#77328b', fontSize: '25px' }}>
                Follow Us
              </Typography>
              <Box sx={{ ml: 12 }}>
                <CardActions>
                  <IconButton>
                    <FaFacebookF />
                  </IconButton>
                  <IconButton>
                    <BsTwitter />
                  </IconButton>
                  <IconButton>
                    <FaLinkedinIn />
                  </IconButton>
                  <IconButton>
                    <FiInstagram />
                  </IconButton>
                  <IconButton>
                    <ImYoutube2 />
                  </IconButton>
                </CardActions>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Box sx={{ position: 'absolute', ml: 5, mt: 5 }}>
              <Typography sx={{ color: '#77328b', fontSize: '25px' }}>
                Get Cinnamon in your inbox
              </Typography>

              <FormControl sx={{ m: 1, maxWidth: 400 }} variant='outlined'>
                <OutlinedInput
                  className='InputFooter'
                  placeholder='Email Address'
                  size='big'
                  id='fullWidth'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton>
                        {' '}
                        <IoIosArrowForward />
                      </IconButton>
                    </InputAdornment>
                  }
                  aria-describedby='outlined-weight-helper-text'
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
                <FormControlLabel
                  sx={{ mt: 2 }}
                  control={<Radio />}
                  label={
                    <>
                      <Typography sx={{ fontSize: '13px', color: '#9a9a9a' }}>
                        By Checking this box, I consent to the processing of my
                        Personal Data by Cinnamon for the purpose and within the
                        Conditions set out in this form and the
                      </Typography>
                      <Typography sx={{ fontSize: '13px' }}>
                        Cinnamon Data Protection Policy *
                      </Typography>
                    </>
                  }
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {isMatch ? (
        ''
      ) : (
        <Box>
          <img
            src='https://www.cinnamonhotels.com/themes/cinnamon/images/footer-bg2.png'
            alt='footerImg'
            style={{ width: '100%' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Footer;
