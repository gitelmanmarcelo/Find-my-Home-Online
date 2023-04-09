import { TextareaAutosize, Box, Input, ImageList, ImageListItem, TextField, Slider, FormControlLabel, FormGroup, Checkbox, Stack, ToggleButton, Typography,ToggleButtonGroup, Button } from "@mui/material";
import LocationSearchInput from "./LocationSearchInput";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";


function RegisterApt() {

  const {localData,setLocalData,currSeller,setCurrSeller} = useContext(AppContext);

  const [aptData,setAptData] = useState({is_rent: true, elevators: false, central_ac: false, split_ac : false, safe_room: false, storage_room: false, accessible : false, refurbished : false, furniture: false, pets : false, dud_shemesh : false});
  const [mainPhoto,setMainPhoto] = useState("");
  const [photosList,setphotosList] = useState([]);

  useEffect(() => setLocalData({}),[]);

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
    const data = {...aptData,...localData,seller_id:currSeller,photos_qty: photosList.length+1};
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
        return res.json();
      else
        console.log('fail')
  })
  .then (data => {
    const apt_id = data[0].apt_id;
    const formData = new FormData();
    formData.append("photo", new File([mainPhoto], apt_id.toString().padStart(4,'0') + '-1.jpeg', {type: mainPhoto.type}));
    for (let i=0; i <= photosList.length; i++) {
      formData.append("photo", new File([photosList[i]], apt_id.toString().padStart(4,'0') + '-' + (i+2).toString() +'.jpeg', {type: mainPhoto.type}));  
    }
          fetch('http://localhost:5000/upload-multiple', {
              method: 'POST',
              body: formData
            })
          .then (response => {
            console.log(response); // server response
          })
          .catch (error => {
            console.error(error);
          });
  })
  .catch (err => {
      console.log('error:',err);
  });
  }

  return (

    <>

    <Stack direction={'row'} spacing={10} mt={2} >

      <Stack ml={2} spacing={2} sx={{width:'750px'}}>

        <ToggleButtonGroup size="medium"  exclusive onChange={handleOpChange} value={aptData.is_rent ? "rent" : "buy"} color="primary">
          <ToggleButton value="rent">Rent</ToggleButton>        
          <ToggleButton value="buy">Sell</ToggleButton>        
        </ToggleButtonGroup> 

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
        <Stack direction={'row'} spacing={2}>

          <TextField InputLabelProps={{ shrink: true }}
            id="street_nr"
            label="Street nr"
            value={aptData.street_nr}
            onChange={handleInputChange}
            variant="standard"
          />

          <TextField InputLabelProps={{ shrink: true }}
            id="floor"
            label="Floor"
            value={aptData.floor}
            onChange={handleInputChange}
            variant="standard"
          />

          </Stack>

          <Stack direction={'row'} spacing={2}>


          <TextField InputLabelProps={{ shrink: true }}
            id="apt_nr"
            label="Apt nr"
            value={aptData.apt_nr}
            onChange={handleInputChange}
            variant="standard"
          />

          <TextField InputLabelProps={{ shrink: true }}
            id="building_floors"
            label="Building floors"
            value={aptData.building_floors}
            onChange={handleInputChange}
            variant="standard"
          />

        </Stack>
      </Stack>


      <Stack spacing={2} sx={{width:'500px'}}>

        <TextField
          id="description"
          multiline
          maxRows={3} minRows={3}
          label="Description"
          variant="standard"
          placeholder="Apartment description"
          value={aptData.description}
          onChange={handleInputChange}
        />
        
        <Stack direction={'row'} spacing={2}>

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
          </Stack>

          <Stack direction={'row'} spacing={2}>
            <TextField
              id="balconies"
              label="Balconies"
              value={aptData.balconies}
              onChange={handleInputChange}
              variant="standard"
            />
            <TextField
              id="parkings"
              label="Parking spaces"
              value={aptData.parkings}
              onChange={handleInputChange}
              variant="standard"
            />
          </Stack>

          <TextField sx={{width:'180px'}}
            id="size"
            label="Size"
            value={aptData.size}
            onChange={handleInputChange}
            variant="standard"
          />
          <TextField
            id="price" sx={{width:'180px'}}
            label="Price"
            value={aptData.price}
            onChange={handleInputChange}
            variant="standard"
            />

          <Stack direction={'row'} spacing={2}>

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

          

      </Stack>  

      <FormGroup sx={{display:'flex', flexDirection:'columns', justifyContent: 'center', marginLeft: '0', whiteSpace: "nowrap"}}>
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

      <Stack spacing={2} sx={{paddingRight:'16px', width:'750px'}}>
    
      <label style={{border:'1px solid rgba(21, 101, 192,0.4)' ,width: '250px', padding: '4px', borderRadius: '5px', marginTop: '8px', backgroundColor: 'rgba(119, 189, 219,0.3)', color: '#1565C0'}}>
        Click to add main photo
        <Input type="file" sx={{display:'none'}} onChange={(e) => {
        const file = e.target.files[0];
        setMainPhoto(file)
        }}/>
      </label>

    
  
    <Box sx={{width:'100px', height: '100px', objectFit:"cover"}}>
      <img src={mainPhoto ? URL.createObjectURL(mainPhoto) : ""} style={{maxWidth:'100%', maxHeight: '100%', display: 'block'}} alt=""/>
    </Box>
  
    <label style={{border:'1px solid rgba(21, 101, 192,0.4)' ,width: '250px', padding: '4px', borderRadius: '5px', marginTop: '16px', backgroundColor: 'rgba(119, 189, 219,0.3)', color: '#1565C0'}}>
      Click to add additional photos
      <Input type="file" sx={{display:'none'}} inputProps={{ multiple: true }}
        onChange={(e) => {
          const list = [];
          for(let i=0; i<e.target.files.length;i++){
            console.log("file",e.target.files[i])
            list.push(e.target.files[i])
          }
          setphotosList(list)        
        }}
        />
    </label>
  
    <ImageList sx={{ width: 500, height: 250 }} cols={3} rowHeight={164}>
      {photosList.map((item,index) => (
        <ImageListItem key={index}>
          <img 
          src={URL.createObjectURL(item)}
        /> 
      </ImageListItem> 
        ))} 
    </ImageList>
  
      </Stack>


    </Stack>

    <Button onClick={handleSubmitApt} sx={{marginTop:'36px'}} variant="contained">Confirm info and register apartment</Button>

  </>
  );
}

export default RegisterApt;