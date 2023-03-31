import { TextField, Slider, FormControlLabel, FormGroup, Checkbox, Stack, ToggleButton, Typography,ToggleButtonGroup, Button } from "@mui/material";
import LocationSearchInput from "./LocationSearchInput";
import { useContext, useState } from "react";
import { AppContext } from "../App";


function RegisterApt() {

  const {localData,setLocalData,currSeller,setCurrSeller} = useContext(AppContext);

    const [aptData,setAptData] = useState({is_rent: true, elevators: false, central_ac: false, split_ac : false, safe_room: false, storage_room: false, accessible : false, refurbished : false, furniture: false, pets : false, dud_shemesh : false});

    const handleCBChange = (e) => {
      console.log(e.target.id)
      console.log(e.target.checked)
      const temp = {...aptData}
      temp[e.target.id] = e.target.checked;
      console.log(temp)
      setAptData(temp);
    }

    const handleOpChange = (e, val) => {
      if (val === 'rent')
        setAptData({...aptData,is_rent:true});
      else
        setAptData({...aptData,is_rent:false});
    }

    const handleLocalChange = (e) => {
      const temp = {...localData}
      temp[e.target.id] = e.target.value;
      setLocalData(temp);
    }

    const handleInputChange = (e) => {
      console.log("val:",e.target.value)
      const temp = {...aptData}
      temp[e.target.id] = e.target.value;
      setAptData(temp);
    }

    const handleSubmitApt = () => {
      const data = {...aptData,...localData,seller_id:currSeller};
      console.log('data:',data)
      fetch("http://localhost:5000/apartment/register",{ 
        method: 'POST', 
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (res => {
        if (res.status === 200)
          console.log('success')
        else
          console.log('fail')
    })
    .catch (err => {
        console.log('error:',err);
    });
    }

    return (

      <>
      <Stack>
        <ToggleButtonGroup size="large"  exclusive onChange={handleOpChange} value={aptData.is_rent ? "rent" : "buy"} color="primary">
          <ToggleButton value="rent">Rent</ToggleButton>        
          <ToggleButton value="buy">Sell</ToggleButton>        
        </ToggleButtonGroup> 
      </Stack>

      <Stack direction={'row'} spacing={10}>

      <Stack m={8} sx={{width:'300px'}}>
        <LocationSearchInput/> 

        <TextField InputLabelProps={{ shrink: true }}
          id="city"
          label="City"
          value={localData.city}
          onChange={handleLocalChange}
          variant="standard"
        />
        <TextField InputLabelProps={{ shrink: true }}
          id="neighborhood"
          label="Neighborhood"
          value={localData.neighborhood}
          onChange={handleLocalChange}
          variant="standard"
        />
        <TextField InputLabelProps={{ shrink: true }}
          id="street"
          label="Street"
          value={localData.street}
          onChange={handleLocalChange}
          variant="standard"
        />
        <TextField
          id="street_nr"
          label="Street nr"
          value={aptData.street_nr}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="floor"
          label="Floor"
          value={aptData.floor}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="apt_nr"
          label="Apt nr"
          value={aptData.apt_nr}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="building_floors"
          label="Floors in the building"
          value={aptData.building_floors}
          onChange={handleInputChange}
          variant="standard"
        />
      </Stack>


      <Stack>

      <TextField
          id="description"
          label="Description"
          value={aptData.description}
          onChange={handleInputChange}
          variant="standard"
        />

      <TextField
          id="bedrooms"
          label="Bedrooms"
          value={aptData.bedrooms}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="bathrooms"
          label="Bathrooms"
          value={aptData.bathrooms}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="balconies"
          label="Balconies"
          value={aptData.balconies}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="parkings"
          label="Parking lots"
          value={aptData.parkings}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="size"
          label="Size"
          value={aptData.size}
          onChange={handleInputChange}
          variant="standard"
        />
        <TextField
          id="price"
          label="Price"
          value={aptData.price}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="arnona"
          label="Arnona (monthly)"
          value={aptData.arnona}
          onChange={handleInputChange}
          variant="standard"
        />

        <TextField
          id="vaad"
          label="Vaad (monthly)"
          value={aptData.vaad}
          onChange={handleInputChange}
          variant="standard"
        />

      </Stack>

      <FormGroup>
    <FormControlLabel control={<Checkbox checked={aptData.elevators} id={"elevators"} onChange={handleCBChange} />} label="Elevator" />
    <FormControlLabel control={<Checkbox checked={aptData.central_ac} id={"central_ac"} onChange={handleCBChange}/>} label="Central AC" />
    <FormControlLabel control={<Checkbox checked={aptData.split_ac} id={"split_ac"} onChange={handleCBChange}/>} label="Split AC" />
    <FormControlLabel control={<Checkbox checked={aptData.safe_room} id={"safe_room"} onChange={handleCBChange}/>} label="Safe Room" />
    <FormControlLabel control={<Checkbox checked={aptData.storage_room} id={"storage_room"} onChange={handleCBChange}/>} label="Storage Room" />
    <FormControlLabel control={<Checkbox checked={aptData.accessible} id={"accessible"} onChange={handleCBChange}/>} label="Accessible" />
    <FormControlLabel control={<Checkbox checked={aptData.refurbished} id={"refurbished"} onChange={handleCBChange}/>} label="Refurbished" />
    <FormControlLabel control={<Checkbox checked={aptData.furniture} id={"furniture"} onChange={handleCBChange}/>}  label="Furniture" />
    <FormControlLabel control={<Checkbox checked={aptData.pets} id={"pets"} onChange={handleCBChange}/>} label="Pets Allowed" />
    <FormControlLabel control={<Checkbox checked={aptData.dud_shemesh} id={"dud_shemesh"} onChange={handleCBChange}/>} label="Dud Shemesh" />
  </FormGroup>    
      
      <input type="file" multiple/>

      </Stack>
      <Button onClick={handleSubmitApt} variant="contained">Register apartment</Button>

      
  
    
</>
);
}

export default RegisterApt;