'use client';

import { useState, MouseEvent } from 'react';
import Link from 'next/link';
import { Button } from '@components/Button';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';

export const MobileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='right-button'
        className='right-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'right-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disableScrollLock
      >
        <Link href='/' passHref>
          <MenuItem>
            <ListItemIcon>
              <InfoIcon fontSize='small' />
            </ListItemIcon>
            <p>Home</p>
          </MenuItem>
        </Link>
        <Link href='https://himaa.me' passHref>
          <MenuItem>
            <ListItemIcon>
              <ArticleIcon fontSize='small' />
            </ListItemIcon>
            <p>About Me</p>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};
