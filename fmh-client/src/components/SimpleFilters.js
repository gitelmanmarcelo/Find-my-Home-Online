import { Stack, ToggleButton, Typography,ToggleButtonGroup, Button } from "@mui/material";
import LocationSearchInput from './LocationSearchInput';
import { AppContext } from '../App';
import { useContext } from 'react';

function SimpleFilters() {
    const {searchOptions,setSearchOptions} = useContext(AppContext);

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
    <>
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

  <Stack direction="row">
    <Typography># of parking lots:</Typography>
  <ToggleButtonGroup size="medium" exclusive onChange={handleParkingChange} value={searchOptions.bathrooms} color="primary">
    <ToggleButton className="circleBtn" value={1}>1</ToggleButton>        
    <ToggleButton className="circleBtn" value={2}>2</ToggleButton>        
    <ToggleButton className="circleBtn" value={3}>3+</ToggleButton>        
    <ToggleButton className="circleBtn" value={0}>clear</ToggleButton>        
  </ToggleButtonGroup>
  </Stack>


  </>
    )
}

export default SimpleFilters;