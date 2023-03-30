import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Favorites', 'Owner'];

function Header() {

  const handleClick = (e) => {
    console.log('here:',e.target.id);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FIND MY HOME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'flex-end'}}>
            {pages.map((page) => (
              <Button
                id={page}
                key={page}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to = {"/"+page}>
                {page}
                </Link>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;