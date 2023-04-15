import * as React from 'react';
import { MenuItem, Menu, AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import IconButton from '@mui/material/IconButton';

const pages = [{title: 'Home', url: '/home'}, {title: 'Favorites 🤍', url: '/favorites'},
              {title: 'Owner', url: '/login-Owner'},
              {title: 'Contact Us', url: '/contact'},
              {title: 'About', url: '/about'} ];

function Header() {

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    if (url !== null)
      navigate(url);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >

          <ApartmentIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6" noWrap component="a" href="/"
            sx={{ m: '2 auto', display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace', fontWeight: 700,
              letterSpacing: '.3rem', color: 'inherit',
              textDecoration: 'none' }}>
            FIND MY HOME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end'}}>
            {pages.map((page) => (
              <Button id={page} key={page.url} onClick={() => {navigate(page.url)}}
                sx={{width: 130, textAlignment: 'center', 
                  borderBottom:'3px solid transparent', my: 4,
                  borderRadius: 0, color: 'white', display: 'block',
                  textDecoration:"none", '&:hover':{borderBottom:'3px solid white'} }}>
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{display:'flex',flexDirection:'row', m:'0 auto'}}>
          <ApartmentIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            FIND MY HOME

          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, position: 'absolute', right: '5px', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {handleCloseNavMenu(null)}}
              sx={{
                display: { xs: 'block', md: 'none' }, zIndex: 100
              }}
            >
              {pages.map((page) => (
              <MenuItem key={page.url} onClick={() => {handleCloseNavMenu(page.url)}}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;