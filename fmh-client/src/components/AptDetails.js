import { IconButton, Paper, Box, Stack, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import './aptdetails.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Map from './Map.js';
import { serverUrl } from "../serverUrl";

let img1 = "visible";
let img2 = "visible";
let img3 = "visible";

function AptDetail(props) {

    const [images,setImages] = useState([])
    const [isFavorite,SetFavorite] = useState(false);

    const {currentApt,currentScreen} = useContext(AppContext);

    const navigate = useNavigate();

    const handleClickForward = () => {
        if (currentApt.photos_qty < 4)
            return;
        const temp = [...images];
        temp.shift();
        if (temp[1] === currentApt.photos_qty)
            temp.push(1);
        else
            temp.push(temp[1]+1);
        setImages(temp);
    }
    const handleClickBack = () => {
        if (currentApt.photos_qty < 4)
            return;
        const temp = [...images];
        temp.pop();
        if (temp[0] === 1)
            temp.unshift(currentApt.photos_qty);
        else
            temp.unshift(temp[0]-1);
        setImages(temp);
    }

    const handleClickFavorite = () => {
        let favList = JSON.parse(localStorage.getItem("favList"));
        if (favList===null) favList = [];
        if (isFavorite) {
            favList = favList.filter(el => el !== currentApt.apt_id);
        } else {
            favList.push(currentApt.apt_id);
        }
        localStorage.setItem("favList",JSON.stringify(favList));
        SetFavorite( !isFavorite);
    }

    useEffect(() => {
        const favList = JSON.parse(localStorage.getItem("favList"));
        if (favList===null) SetFavorite(false);
        else
            SetFavorite(favList.some(el => el === currentApt.apt_id));
    },[isFavorite]);

    useEffect(() => {

        if (currentApt.photos_qty === 1)
        {
            img2 = "hidden";
            img3 = "hidden";
            setImages([1,0,0]);
        }
        else if (currentApt.photos_qty === 2)
        {
            img2 = "visible"
            img3 = "hidden";
            setImages([1,2,0]);
        }
        else {
            img2 = "visible"
            img3 = "visible"
            setImages([1,2,3]);
        }
    },[currentApt.photos_qty]);

    const itensDont = [];
    const itensHave = [];
    const labels = {elevators: 'elevators', central_ac: 'central AC',
     split_ac: 'split AC', safe_room: 'safe room', storage_room: 'storage room',
     accessible: 'accessible', refurbished: 'refurbished', furniture: 'furniture',
     pets: 'pets', dud_shemesh: "sun water heating"}
    for (let i in currentApt) {
        if (labels[i])
            if(currentApt[i])
                itensHave.push(labels[i])
            else
                itensDont.push(labels[i])
    }
    if (!currentApt.balconies)
        itensDont.push("balconies")
    if (!currentApt.parkings)
        itensDont.push("parking spaces")

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
         alignItems: 'center'}}>

            <Button variant="contained"
                sx={{ width: '80px', position: "fixed", top: 125, left: 28, zIndex: 2000 }}
                onClick={() => {navigate("/"+currentScreen)}}>
                {"< back"}
            </Button>
            <Paper  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%', marginTop: '20px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
                <Stack direction='row' spacing={2} sx={{}}> 
                    <Button variant='contained' onClick={handleClickBack}>
                        {"<"}
                    </Button>

                    <div className={img1} style={{position:'relative'}}>
                        <img style={{width:'250px', height:'200px'}} src={serverUrl+"/photos/"+ currentApt.apt_id.toString().padStart(4,'0') + "-" + images[0] + ".jpeg"} />
                        <Box  sx={{typography: 'body2', zIndex:'500', padding: '2px', backgroundColor: 'white', color: 'grey', position: 'absolute', top: '10%', right: '5%', fontWeight: 'bold', borderRadius:'10%'}} > 
                            {images[0]}/{currentApt.photos_qty}
                        </Box> 
                    </div>
                    <div className={img2} style={{position:'relative'}}>
                        <img style={{width:'250px', height:'200px'}} src={serverUrl+"/photos/"+ currentApt.apt_id.toString().padStart(4,'0') + "-" + images[1] + ".jpeg"} />
                        <Box  sx={{typography: 'body2', zIndex:'500', padding: '2px', backgroundColor: 'white', color: 'grey', position: 'absolute', top: '10%', right: '5%', fontWeight: 'bold', borderRadius:'10%'}} > 
                            {images[1]}/{currentApt.photos_qty}
                        </Box>                </div>
                    <div className={img3} style={{position:'relative'}}>
                        <img style={{width:'250px', height:'200px'}} src={"/photos/"+ currentApt.apt_id.toString().padStart(4,'0') + "-" + images[2] + ".jpeg"} />
                        <Box  sx={{typography: 'body2', zIndex:'500', padding: '2px', backgroundColor: 'white', color: 'grey', position: 'absolute', top: '10%', right: '5%', fontWeight: 'bold', borderRadius:'10%'}} > 
                            {images[2]}/{currentApt.photos_qty}
                        </Box>                
                    </div>
                    <Button variant='contained' onClick={handleClickForward}>
                        {">"}
                    </Button>
                </Stack>

                <Stack direction={'row'} ml={5} mr={5} spacing={1} sx={{position:'relative', width: '950px', typography: 'body2', textAlign:"left"}}>

                    <Stack ml={11}>
                        {currentApt.city} {currentApt.neighborhood ? " - "+currentApt.neighborhood : ""} <br/>
                        {currentApt.street}, {currentApt.street_nr}<br/>
                        {currentApt.description}<br/>
                        {currentApt.bedrooms} bedrooms  {currentApt.bathrooms} bathrooms   <br/>
                        {currentApt.balconies === 0 ? "" : currentApt.balconies === 1 ? currentApt.balconies+" balcony" : currentApt.balconies+" balconies" }
                        {currentApt.balconies === 0 ? "" : " "}
                        {currentApt.parkings === 0 ? "" : currentApt.parkings === 1 ? currentApt.parkings+" parking space" : currentApt.parkings+" parking spaces" }<br/>
                        {currentApt.parkings === 0 ? "" : "\n"}
                        floor {currentApt.floor} of {currentApt.building_floors}<br/>
                        Rent: ${currentApt.price} Arnona: ${currentApt.arnona ? currentApt.arnona : "-" }<br/>
                        Vaad: ${currentApt.vaad ? currentApt.vaad : '-'} Size: {currentApt.size}m²
                        <Stack direction={'row'} mt={1} sx={{fontSize: '0.7rem', display:'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '5px'}}>
                            {itensHave.map((item,index) => (
                                <Box key={index} sx={{border: '1px solid grey', borderRadius:'10%', height: '0.8rem', padding: '2px', whiteSpace: 'nowrap', marginBottom: '10px'}}>{item}</Box>
                            ))}
                        </Stack>
                        <Stack direction={'row'} sx={{fontSize: '0.7rem', display:'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '5px'}}>
                            {itensDont.map((item,index) => (
                                <Box key={index} sx={{whiteSpace: 'nowrap', border: '1px solid grey', borderRadius:'10%',padding: '2px', height: '0.8rem' , marginBottom: '10px',textDecoration: "line-through", backgroundColor: 'text.disabled', color:'black'}}>{item}</Box>
                            ))}
                        </Stack>
                    </Stack>
                    <IconButton sx={{zIndex: 500, position: 'absolute', right: '26%', bottom: '75%'}} onClick={handleClickFavorite}>
            { isFavorite 
            ?  <FavoriteIcon sx={{fontSize: '1rem', border:'1px solid grey', borderRadius:'10%', backgroundColor: 'white', p:1 ,margin:'0 auto'}}/>
            :  <FavoriteBorderIcon sx={{fontSize: '1rem', border:'1px solid grey', borderRadius:'10%', backgroundColor: 'white', p:1 ,margin:'0 auto'}}/> 
            }
        </IconButton>
                    <Button variant="contained"
                    sx={{ width: '200px', height: '90px', position: 'absolute', right: '10%', bottom: '30%' }}
                    onClick={() => {navigate("/deal?seller="+currentApt.seller_id)}}>I want this one <span style={{fontSize:'3rem'}}><i className="fa-solid fa-house-circle-check"></i></span></Button>

                </Stack>
                </Box>
                <div style={{border: '3px solid blue', borderRadius: '10px', margin: '15px', height: '60vh', width:'30vw'}}>
                    <Map address={currentApt.street_nr + " " + currentApt.street + "," + currentApt.city}/>
                </div>
            </Paper>
        </div>
    )
}

export default AptDetail;