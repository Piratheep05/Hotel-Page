import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navBarTwoData } from '../../data/Data';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {navBarTwoData &&
            navBarTwoData.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText> {page.text}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: '#000', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
