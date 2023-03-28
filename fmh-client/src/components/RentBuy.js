import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LocationSearchInput from './LocationSearchInput';
import { ToggleButtonGroup, ToggleButton, Stack, Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import App, { AppContext } from '../App';
import './RentBuy.css'



export default function RentBuy() {

  const {searchOptions,setSearchOptions} = useContext(AppContext);

  const navigate = useNavigate();

  const handleOpChange = (evt,val) => {
    if (val === 'rent')
      setSearchOptions({...searchOptions,is_rent:true});
    else
      setSearchOptions({...searchOptions,is_rent:false});
    
  }

  const handleBedroomsChange = (evt,val) => {
    setSearchOptions({...searchOptions,bedrooms:val});
  }

  const handleBathroomsChange = (evt,val) => {
    setSearchOptions({...searchOptions,bathrooms:val});
  }

  const handleSearchClick = () => {
    console.log('hi');
    navigate('/apt-list')
  }


  return (
    <Paper sx={{ width: '60%' }}>
      <Stack>
        <ToggleButtonGroup size="large"  exclusive onChange={handleOpChange} value={searchOptions.is_rent ? "rent" : "buy"} color="primary">
          <ToggleButton value="rent">Rent</ToggleButton>        
          <ToggleButton value="buy">Buy</ToggleButton>        
        </ToggleButtonGroup> 
      </Stack>
      <Stack>
      {/* <LocationSearchInput/>  */}
      </Stack>
      <Stack direction="row" spacing={4}>
        <Typography># of bedrooms:</Typography>
      <ToggleButtonGroup size="medium" exclusive onChange={handleBedroomsChange} value={searchOptions.bedrooms} color="primary">
        <ToggleButton className="circleBtn" value={1}>1</ToggleButton>        
        <ToggleButton className="circleBtn" value={2}>2</ToggleButton>        
        <ToggleButton className="circleBtn" value={3}>3</ToggleButton>        
        <ToggleButton className="circleBtn" value={4}>4</ToggleButton>        
        <ToggleButton className="circleBtn" value={5}>5</ToggleButton>        
        <ToggleButton className="circleBtn" value={6}>6+</ToggleButton>        
      </ToggleButtonGroup>
      </Stack>
 
      <Stack direction="row">
        <Typography># of bathrooms:</Typography>
      <ToggleButtonGroup size="medium" exclusive onChange={handleBathroomsChange} value={searchOptions.bathrooms} color="primary">
        <ToggleButton className="circleBtn" value={1}>1</ToggleButton>        
        <ToggleButton className="circleBtn" value={2}>2</ToggleButton>        
        <ToggleButton className="circleBtn" value={3}>3+</ToggleButton>        
      </ToggleButtonGroup>
      </Stack>

      <Stack>
        <Button variant="contained" onClick={handleSearchClick}>Search</Button>
      </Stack>
 
    </Paper>
  );
}