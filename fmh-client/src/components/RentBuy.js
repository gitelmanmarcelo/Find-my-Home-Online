import * as React from 'react';
import {Box, Paper, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './RentBuy.css'
import SimpleFilters from './SimpleFilters';
import SearchIcon from '@mui/icons-material/Search';

export default function RentBuy() {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/apt-list')
  }

  return (
    <Paper sx={{ width: '70%', margin : '30px', display: 'flex', justifyContent: 'center' }}>
      <Stack direction="row">
        <Box sx={{width: '30vw'}}>
          <SimpleFilters/>
          <Stack sx={{display:'flex', alignItems: 'center'}}>
            <Button variant="contained" sx={{ width: '100px', marginTop: '30px'}} endIcon={<SearchIcon />}onClick={handleSearchClick}>Search</Button>
          </Stack>
        </Box>
        <Box
    sx={{
      margin: '20px',
      height: '50vh',
      width: '15vw',
      backgroundImage: 'url("img/house-background.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}></Box>
        <Box
    sx={{
      margin: '20px',
      height: '50vh',
      width: '15vw',
      backgroundImage: 'url("img/building-bg.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'}}></Box>
      </Stack>
    </Paper>
  );
}