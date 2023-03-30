import { Slider, FormControlLabel, FormGroup, Checkbox, Stack, ToggleButton, Typography,ToggleButtonGroup, Button } from "@mui/material";
import LocationSearchInput from './LocationSearchInput';
import { AppContext } from '../App';
import { useContext } from 'react';

function AdvancedFilters() {
    const {searchOptions,setSearchOptions} = useContext(AppContext);

    const handleCBChange = (evt,val) => {
      const temp = {...searchOptions};
      if (val)
        temp[evt.currentTarget.id] = val;
      else
        delete temp[evt.currentTarget.id];
      console.log('temp=',temp)
      setSearchOptions(temp);
    }
    
    const handlePriceChange = (event, newValue) => {
      setSearchOptions({...searchOptions,minPrice : newValue[0], maxPrice: newValue[1]});
    };

    const handleSizeChange = (event, newValue) => {
      setSearchOptions({...searchOptions,minSize : newValue[0], maxSize: newValue[1]});
    };

    return (
    <>

  <Stack mt={5} spacing={2} direction={'row'}>
      <Typography>
        Price:
      </Typography>
    <Slider
          sx={{width:300}}
          value={[searchOptions.minPrice,searchOptions.maxPrice]}
          onChange={handlePriceChange}
          valueLabelDisplay="on" min={0} max={40000} step={500}
        />
  </Stack>

  <Stack mt={5} spacing={2} direction={'row'}>
      <Typography>
        Size:
      </Typography>
    <Slider
          sx={{width:300}}
          value={[searchOptions.minSize,searchOptions.maxSize]}
          onChange={handleSizeChange}
          valueLabelDisplay="on" min={0} max={800} step={10}
        />
  </Stack>

  <FormGroup>
  <FormControlLabel control={<Checkbox checked={searchOptions.elevators} id={"elevators"} onChange={handleCBChange} />} label="Elevator" />
  <FormControlLabel control={<Checkbox checked={searchOptions.central_ac} id={"central_ac"} onChange={handleCBChange}/>} label="Central AC" />
  <FormControlLabel control={<Checkbox checked={searchOptions.split_ac} id={"split_ac"} onChange={handleCBChange}/>} label="Split AC" />
  <FormControlLabel control={<Checkbox checked={searchOptions.balconies} id={"balconies"} onChange={handleCBChange}/>} label="Balconies" />
  <FormControlLabel control={<Checkbox checked={searchOptions.safe_room} id={"safe_room"} onChange={handleCBChange}/>} label="Safe Room" />
  <FormControlLabel control={<Checkbox checked={searchOptions.storage_room} id={"storage_room"} onChange={handleCBChange}/>} label="Storage Room" />
  <FormControlLabel control={<Checkbox checked={searchOptions.accessible} id={"accessible"} onChange={handleCBChange}/>} label="Accessible" />
  <FormControlLabel control={<Checkbox checked={searchOptions.refurbished} id={"refurbished"} onChange={handleCBChange}/>} label="Refurbished" />
  <FormControlLabel control={<Checkbox checked={searchOptions.furniture} id={"furniture"} onChange={handleCBChange}/>}  label="Furniture" />
  <FormControlLabel control={<Checkbox checked={searchOptions.pets} id={"pets"} onChange={handleCBChange}/>} label="Pets Allowed" />
  <FormControlLabel control={<Checkbox checked={searchOptions.dud_shemesh} id={"dud_shemesh"} onChange={handleCBChange}/>} label="Dud Shemesh" />
</FormGroup>


  </>
    )
}

export default AdvancedFilters;