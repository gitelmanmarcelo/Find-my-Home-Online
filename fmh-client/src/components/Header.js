import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';

const pages = [{title: 'Home', url: '/home'}, {title: 'Favorites 🤍', url: '/favorites'},
              {title: 'Owner', url: '/login-Owner'},
              {title: 'Contact Us', url: '/contact'},
              {title: 'About', url: '/about'} ];

function Header() {

  const navigate = useNavigate();

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

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;