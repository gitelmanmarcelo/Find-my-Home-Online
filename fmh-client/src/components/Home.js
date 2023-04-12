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
    <Paper sx={{ width: '70%', margin : '30px auto', display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Stack sx={{width: '100%'}} direction="row">
        <Box sx={{width: '60%'}}>
          <SimpleFilters/>
          <Stack sx={{display:'flex', alignItems: 'center'}}>
            <Button variant="contained" sx={{ width: '100px', marginTop: '30px'}} endIcon={<SearchIcon />}onClick={handleSearchClick}>Search</Button>
          </Stack>
        </Box>
        <Box sx={{height:'100%', display:'flex', alignItems: 'center', }}>
          <HomeWorkIcon sx={{ borderRadius: '10px', margin: "auto 0", backgroundColor: "#1976d2", color: 'white', fontSize: '20rem' }} />
        </Box>
      </Stack>
    </Paper>
  );
}