import { Slider, FormControlLabel, FormGroup, Checkbox, Stack, ToggleButton, Typography,ToggleButtonGroup, Button } from "@mui/material";
import { useState } from "react";


function RegisterApt() {

    const [aptData,setAptData] = useState({});

    const handleCBChange = () => {

    }

    const handleOpChange = () => {

    }

    return (

        <>
        <Stack>
        <ToggleButtonGroup size="large"  exclusive onChange={handleOpChange} value={aptData.is_rent ? "rent" : "buy"} color="primary">
          <ToggleButton value="rent">Rent</ToggleButton>        
          <ToggleButton value="buy">Buy</ToggleButton>        
        </ToggleButtonGroup> 
      </Stack>
      <Stack>
      {/* <LocationSearchInput/>  */}
      </Stack>
      <Stack direction="row" spacing={4}>
        <Typography># of bedrooms:</Typography>
      </Stack>
    
      <Stack direction="row">
        <Typography># of bathrooms:</Typography>
      </Stack>
    
      <Stack direction="row">
        <Typography># of parking lots:</Typography>
      </Stack>
    
      <Stack mt={5} spacing={2} direction={'row'}>
      <Typography>
        Price:
      </Typography>
  </Stack>

  <Stack mt={5} spacing={2} direction={'row'}>
      <Typography>
        Size:
      </Typography>
  </Stack>

  <FormGroup>
  <FormControlLabel control={<Checkbox checked={aptData.elevators} id={"elevators"} onChange={handleCBChange} />} label="Elevator" />
  <FormControlLabel control={<Checkbox checked={aptData.central_ac} id={"central_ac"} onChange={handleCBChange}/>} label="Central AC" />
  <FormControlLabel control={<Checkbox checked={aptData.split_ac} id={"split_ac"} onChange={handleCBChange}/>} label="Split AC" />
  <FormControlLabel control={<Checkbox checked={aptData.balconies} id={"balconies"} onChange={handleCBChange}/>} label="Balconies" />
  <FormControlLabel control={<Checkbox checked={aptData.safe_room} id={"safe_room"} onChange={handleCBChange}/>} label="Safe Room" />
  <FormControlLabel control={<Checkbox checked={aptData.storage_room} id={"storage_room"} onChange={handleCBChange}/>} label="Storage Room" />
  <FormControlLabel control={<Checkbox checked={aptData.accessible} id={"accessible"} onChange={handleCBChange}/>} label="Accessible" />
  <FormControlLabel control={<Checkbox checked={aptData.refurbished} id={"refurbished"} onChange={handleCBChange}/>} label="Refurbished" />
  <FormControlLabel control={<Checkbox checked={aptData.furniture} id={"furniture"} onChange={handleCBChange}/>}  label="Furniture" />
  <FormControlLabel control={<Checkbox checked={aptData.pets} id={"pets"} onChange={handleCBChange}/>} label="Pets Allowed" />
  <FormControlLabel control={<Checkbox checked={aptData.dud_shemesh} id={"dud_shemesh"} onChange={handleCBChange}/>} label="Dud Shemesh" />
</FormGroup>
    
      </>
    );
}

export default RegisterApt;