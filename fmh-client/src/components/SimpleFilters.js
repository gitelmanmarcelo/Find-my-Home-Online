import { Box,Stack, ToggleButton, Typography,ButtonGroup,ToggleButtonGroup, Button } from "@mui/material";
import LocationSearchInput from './LocationSearchInput';
import { AppContext } from '../App';
import { useContext, useEffect } from 'react';

function SimpleFilters() {
    const {searchOptions,setSearchOptions,setLocalData} = useContext(AppContext);

    useEffect(()=>{
      setSearchOptions({is_rent:true, minPrice:50, maxPrice:60000, minSize: 0, maxSize: 800});
      setLocalData({city:"",neighborhood:"",street:""});
    },[])

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

    const handleParkingChange = (evt,val) => {
      setSearchOptions({...searchOptions,parkings : val});
    }
    
    return (
    <Stack  spacing={4}>
    <Stack>
    <ToggleButtonGroup size="medium" sx={{marginTop: '30px'}} exclusive onChange={handleOpChange} value={searchOptions.is_rent ? "rent" : "buy"} color="primary">
      <ToggleButton value="rent">Rent</ToggleButton>        
      <ToggleButton value="buy">Buy</ToggleButton>        
    </ToggleButtonGroup> 
  </Stack>
  <Stack>
  <LocationSearchInput/> 
  </Stack>
  <Stack direction='row'>
  <Box sx={{width:'150px'}}>
      <Typography>Nr. of bedrooms:</Typography>
    </Box>
  <ToggleButtonGroup size="medium" exclusive onChange={handleBedroomsChange} value={searchOptions.bedrooms} color="primary">
    <ToggleButton className="circleBtn" value={1}>1&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={2}>2&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={3}>3&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={4}>4&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={5}>5&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={6}>6+</ToggleButton>        
  </ToggleButtonGroup>
  </Stack>

  <Stack direction="row">
  <Box sx={{width:'150px'}}>
    <Typography>Nr. of bathrooms:</Typography>
  </Box>
  <ToggleButtonGroup size="medium" exclusive onChange={handleBathroomsChange} value={searchOptions.bathrooms} color="primary">
    <ToggleButton className="circleBtn" value={1}>1&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={2}>2&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={3}>3+</ToggleButton>        
  </ToggleButtonGroup>
  </Stack>

  <Stack direction="row">
  <Box sx={{width:'150px'}}>
    <Typography>Nr. of parking lots:</Typography>
  </Box>
  <ToggleButtonGroup size="medium" exclusive onChange={handleParkingChange} value={searchOptions.parkings} color="primary">
    <ToggleButton className="circleBtn" value={1}>1&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={2}>2&nbsp;</ToggleButton>        
    <ToggleButton className="circleBtn" value={3}>3+</ToggleButton>        
    <ToggleButton className="circleBtn" value={0}>clear</ToggleButton>        
  </ToggleButtonGroup>
  </Stack>


  </Stack>
    )
}

export default SimpleFilters;