import * as React from 'react';
import {Box, Paper, Stack, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeWorkIcon from '@mui/icons-material/HomeWork';import { useNavigate } from 'react-router-dom';
import './Home.css'
import SimpleFilters from './SimpleFilters';


export default function Home() {

  const navigate = useNavigate();
  
  const handleSearchClick = () => {
    navigate('/apt-list')
  }

  return (
    <Paper sx={{ width: { xs: '80%', lg: '70%'}, margin : { xs: '15px auto', lg: '30px auto'}, display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Stack sx={{width: '100%'}} direction="row">
        <Box sx={{width:  { xs: '100%', lg: '60%'}}}>
          <SimpleFilters/>
          <Stack sx={{display:'flex', alignItems: 'center'}}>
            <Button variant="contained" sx={{ width: '100px', marginTop: '30px'}} endIcon={<SearchIcon />}onClick={handleSearchClick}>Search</Button>
          </Stack>
        </Box>
        <Box sx={{height:'100%', display: { xs: 'none', lg: 'flex'}, alignItems: 'center', }}>
          <HomeWorkIcon sx={{ borderRadius: '10px', margin: "auto 0", backgroundColor: "#1976d2", color: 'white', fontSize: '20rem' }} />
        </Box>
      </Stack>
    </Paper>
  );
}