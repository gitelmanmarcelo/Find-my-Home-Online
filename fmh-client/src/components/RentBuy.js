import * as React from 'react';
import {Paper, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './RentBuy.css'
import SimpleFilters from './SimpleFilters';



export default function RentBuy() {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    console.log('hi');
    navigate('/apt-list')
  }

  return (
    <Paper sx={{ width: '60%' }}>
      <SimpleFilters/>
      <Stack>
    <Button variant="contained" onClick={handleSearchClick}>Search</Button>
  </Stack>
    </Paper>
  );
}