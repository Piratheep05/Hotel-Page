import React from 'react';
import { navBar1 } from '../../data/Data';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import { navBar2 } from '../../data/Data';

import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: '1000px',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    height: '10vw',
  },
}));

const Header = () => {
  

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ backgroundColor: '#fff' }}>
          <Toolbar variant='dense'>
            <Box sx={{ width: '190px', height: '40px', ml: 5 }}>
              <Link to='/'>
                <img
                  alt='logo'
                  src='https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png'
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ mr: 5, p: 1.5 }}>
              {navBar1.map((item) => (
                <Button
                  key={item}
                  sx={{ color: '#333', fontSize: '14px', fontWeight: 550 }}
                >
                  {item.icon} {item.name} |
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <AppBar position='static' sx={{ backgroundColor: '#333' }}>
          <Toolbar variant='dense'>
            <Box sx={{ display: 'flex', p: 0.1, ml: 6 }}>
              {navBar2.map((data) => {
                return (
                  <>
                    <Box>
                      <div>
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
                                sx={{ color: '#fff', textDecoration: 'none' }}
                              >
                                {data.text}
                              </Typography>
                            </Link>
                          </IconButton>
                        </HtmlTooltip>
                      </div>
                    </Box>
                  </>
                );
              })}
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ ml: 15 }}>
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
      </Box>
    </Box>
  );
};

export default Header;
