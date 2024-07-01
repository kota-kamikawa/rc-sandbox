import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useNavigate } from '@tanstack/react-router';
import { useSnackbar } from 'notistack';
import { useRecoilState } from 'recoil';

import AVATAR_IMG from '../../assets/avater.png';
import APP_LOGO from '../../assets/logo.svg';
import useLoginForm from '../../hooks/useLoginForm';
import { userState } from '../../store/auth';
import { ProfileModal } from './ProfileModal';

const settings = ['Profile', 'Dashboard', 'Logout'];

export const Header = () => {
  const [user] = useRecoilState(userState);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const snackvar = useSnackbar();
  const navigate = useNavigate();
  const { logout } = useLoginForm();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!event.currentTarget.id) {
      snackvar.enqueueSnackbar('No menu item found', {
        variant: 'error',
      });
    }

    if (event.currentTarget.id === 'Logout') {
      logout();
      snackvar.enqueueSnackbar('ログアウトしました!', {
        variant: 'success',
      });
      return;
    } else if (event.currentTarget.id === 'Profile') {
      handleOpenProfile();
      return;
    }

    snackvar.enqueueSnackbar(`Move to : ${event.currentTarget.id} page!`, {
      variant: 'success',
    });

    navigate({
      to: `/${event.currentTarget.id}`,
    });
  };

  const handleOpenProfile = () => {
    setOpen(true);
  };

  const handleCloseProfile = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={APP_LOGO}
              alt="logo"
              style={{ width: '30px', display: 'flex', marginRight: '1rem' }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              RC-Sandbox
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user?.username} src={AVATAR_IMG} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      id={setting}
                      onClick={handleMenuClick}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ProfileModal open={open} handleClose={handleCloseProfile} />
    </>
  );
};
