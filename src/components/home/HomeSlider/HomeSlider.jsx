import React, { useState } from 'react';
import Slider from '../../slider/Slider';
import { sliderData } from '../../data/Data';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Popover,
  Button,
  useMediaQuery,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoPricetagOutline } from 'react-icons/io5';
import Table from './Table';

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

const names = [
  'Corporate',
  'Group',
  'Travel Agency',
  'Promotion',
  'Business Travel Program',
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getWeeksAfter(date, amount) {
  return date ? date.add(amount, 'week') : undefined;
}

const HomeSlider = () => {
  const [value, setValue] = useState([null, null]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? 'simple-popover' : undefined;

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  //console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  // console.log(isMatch);

  return (
    <Box>
      {isMatch ? (
        ''
      ) : (
        <Box
          sx={{
            width: '90%',
            textAlign: 'center',
            ml: 10,
            position: 'absolute',
            zIndex: 2,
            mt: 45,
            backgroundColor: 'hsla(0,0%,100%,.6)',
            p: 1,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  disablePast
                  value={value}
                  maxDate={getWeeksAfter(value[0], 4)}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </>
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={4}>
              <div>
                <Button
                  aria-describedby={id}
                  size='large'
                  variant='contained'
                  onClick={handleClick}
                  sx={{
                    p: 2,
                    color: 'black',
                    backgroundColor: 'white',
                    textTransform: 'none',
                    width: '90%',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <PersonOutlineIcon />1 Room,1 Adult,0 children
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <Table />
                  </Box>
                </Popover>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Button
                  aria-describedby={id1}
                  size='large'
                  variant='contained'
                  onClick={handleClick1}
                  sx={{
                    p: 2,
                    color: 'black',
                    backgroundColor: 'white',
                    textTransform: 'none',
                    width: '70%',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <IoPricetagOutline /> Special Code
                </Button>
                <Popover
                  id={id1}
                  open={open1}
                  anchorEl={anchorEl1}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <div>
                    <Typography textAlign={'center'} sx={{ mt: 2 }}>
                      Corporate / Special Rate (Optional)
                    </Typography>
                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                      <Select
                        multiple
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Select Code Type</em>;
                          }

                          return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem disabled value=''>
                          <em>Select Code Type</em>
                        </MenuItem>
                        {names &&
                          names.map((name, index) => (
                            <MenuItem
                              key={index}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                      </Select>
                      <br />
                      <TextField
                        id='outlined-basic'
                        placeholder='Placeholder'
                        variant='outlined'
                      />
                    </FormControl>
                  </div>
                </Popover>
                <Button
                  variant='contained'
                  size='large'
                  sx={{
                    p: 2,
                    textTransform: 'none',
                    backgroundColor: '#876a20',
                  }}
                >
                  Search
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Slider data={sliderData} />
        </Grid>
      </Grid>
      <br />
    </Box>
  );
};

export default HomeSlider;
