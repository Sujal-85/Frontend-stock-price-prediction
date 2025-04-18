import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  Divider,
  useScrollTrigger,
  Slide,
  CssBaseline
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  TrendingUp,
  ShowChart,
  Notifications,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';



// Custom styled components
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

const AnimatedButton = styled(Button)({
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <TrendingUp />
        </IconButton>
        <p>Market Trends</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <ShowChart />
        </IconButton>
        <p>Predictions</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Notifications />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Logo/Brand */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                background: 'linear-gradient(45deg, #4fc3f7 30%, #00acc1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              STOCKAI
            </Typography>

            {/* Search Bar */}
            

            <Box sx={{ flexGrow: 1 }} />
            
            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              
              <AnimatedButton 
                component={Link} 
                to="/news" 
                color="inherit"
                startIcon={<TrendingUp />}
                sx={{ 
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Market News
              </AnimatedButton>
              
              <AnimatedButton 
                href='https://sujal-85-stock-price-prediction-project-app-cwvodq.streamlit.app/'
                color="inherit"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" 
                startIcon={<ShowChart />}
                sx={{ 
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Predictions
              </AnimatedButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
