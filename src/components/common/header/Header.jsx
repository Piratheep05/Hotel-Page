import React from 'react';
import { navBarOneData } from '../../data/Data';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { navBarTwoData } from '../../data/Data';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import Drawer from '../Drawer/Drawer';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    minWidth: '100vw',
    position: 'relative',
    left: 0,
    top: -10,
    // transform:'translateY(-50px)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    height: '10vw',
  },
}));

const Header = () => {
  const theme = useTheme();
  //console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  // console.log(isMatch);
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        {isMatch ? (
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box sx={{ width: '190px', height: '40px', ml: 7 }}>
              <Link to='/'>
                <img
                  alt='logo'
                  src='https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png'
                />
              </Link>
            </Box>
            <Drawer />
          </Box>
        ) : (
          <>
            <AppBar position='static' sx={{ backgroundColor: '#fff' }}>
              <Toolbar variant='dense'>
                <Box sx={{ width: '190px', height: '40px', ml: 7 }}>
                  <Link to='/'>
                    <img
                      alt='logo'
                      src='https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png'
                    />
                  </Link>
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ mr: 5, p: 1.5 }}>
                  {navBarOneData &&
                    navBarOneData.map((item, index) => (
                      <Button
                        key={index}
                        sx={{
                          color: '#333',
                          fontSize: '14px',
                          fontWeight: 550,
                        }}
                      >
                        {item.icon} {item.name} |
                      </Button>
                    ))}
                </Box>
              </Toolbar>
            </AppBar>

            <AppBar position='static' sx={{ backgroundColor: '#333' }}>
              <Toolbar variant='dense'>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', mr: 20 }}>
                    {navBarTwoData &&
                      navBarTwoData.map((data, index) => (
                        <Box key={index}>
                          <div>
                          {data.head ? (
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Typography
                            color='inherit'
                            variant='h6'
                            fontWeight={600}
                          >
                            {data.head}
                          </Typography>
                          <Typography variant='body2'>
                            {data.details}
                          </Typography>
                        </React.Fragment>
                      }
                    >
                      <IconButton sx={{ color: '#fff' }}>
                        <Link
                          to={data.path}
                          style={{ textDecoration: 'none' }}
                        >
                          <Typography
                            sx={{
                              color: '#fff',
                              textDecoration: 'none',
                              '&:hover': {
                                backgroundColor: '#fff',
                                color: '#000',
                              },
                            }}
                          >
                            {data.text}
                          </Typography>
                        </Link>
                      </IconButton>
                    </HtmlTooltip>
                  ) : (
                    <IconButton sx={{ color: '#fff' }}>
                      <Link to={data.path} style={{ textDecoration: 'none' }}>
                        <Typography
                          sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            '&:hover': {
                              backgroundColor: '#fff',
                              color: '#000',
                            },
                          }}
                        >
                          {data.text}
                        </Typography>
                      </Link>
                    </IconButton>
                  )}
                          </div>
                        </Box>
                      ))}
                  </Box>
                  {/* <Box sx={{ flexGrow: 1 }} /> */}

                  <Box sx={{}}>
                    <Button
                      variant='outlined'
                      sx={{
                        color: '#fff',
                        border: '1px solid #fff',
                        fontSize: '14px',
                        fontWeight: 'bold',
                      }}
                    >
                      FIND A HOTEL
                    </Button>
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
