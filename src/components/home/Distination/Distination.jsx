import React from 'react';
import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { selectData } from '../../data/Data';
import { dropDownSelectData } from '../../data/Data';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Distination = () => {
  const [place, setPlace] = useState(1);

  const handleChange = (event) => {
    setPlace(event.target.value);
  };
  //  console.log('place', place);

  // dropdown selectdata finding other array
  const result = selectData?.filter((data, index) => place === data.id);

  // console.log(result, 'result');
  const theme = useTheme();
  //console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  // console.log(isMatch);
  return (
    <Box>
      <Box sx={{ p: 1, mt: 2 }}>
        <Typography
          variant='h3'
          textAlign={'center'}
          sx={{
            fontStyle: 'italic',
            color: '#77328b',
            fontFamily: 'BodoniStd-BookItalic',
          }}
        >
          Our Destinations
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <FormControl sx={{ m: 1, minWidth: 420 }}>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={place}
              onChange={handleChange}
              MenuProps={MenuProps}
            >
              {dropDownSelectData &&
                dropDownSelectData.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Box
            sx={{
              p: 1,
              position: 'relative',
              textAlign: 'center',
              margin: '0 auto',
              maxWidth: 1050,
            }}
          >
            <img
              src={result[0]?.url}
              alt={result[0]?.name}
              style={{ width: '60%' }}
            />
            {isMatch ? (
              <Box>
                <Typography sx={{ fontSize: '2rem', color: '#77328b' }}>
                  {result[0]?.name}
                </Typography>
                <br />
                <br />
                <Typography sx={{ fontSize: '1rem' }}>
                  {result[0]?.description}
                </Typography>
                <br />

                <Button
                  variant='contained'
                  size=''
                  sx={{
                    backgroundColor: '#252776',
                    textTransform: 'none',
                    fontSize: '20px',
                    p: '13px 30px 11px 30px',
                  }}
                >
                  Discover More
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  position: 'absolute',
                  transform: 'translate(0%, -45%)',
                  background: '#ffffff',
                  padding: '30px 50px',
                  boxShadow: '1px 5px 20px #9a9a9a',
                  maxWidth: 500,
                  textAlign: 'center',
                  // zIndex:5,
                  top: '50%',
                  left: '60%',
                  // ml:30
                }}
              >
                <Typography sx={{ fontSize: '2rem', color: '#77328b' }}>
                  {result[0]?.name}
                </Typography>
                <br />
                <br />
                <Typography sx={{ fontSize: '1rem' }}>
                  {result[0]?.description}
                </Typography>
                <br />

                <Button
                  variant='contained'
                  size=''
                  sx={{
                    backgroundColor: '#252776',
                    textTransform: 'none',
                    fontSize: '20px',
                    p: '13px 30px 11px 30px',
                  }}
                >
                  Discover More
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Distination;
