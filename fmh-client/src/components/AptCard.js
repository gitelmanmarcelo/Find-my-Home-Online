import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { Box, Stack, IconButton } from "@mui/material";
import { serverUrl } from '../serverUrl.js'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function AptCard(props) {
    const navigate = useNavigate();
    const {refreshFavs,setRefreshFavs,setCurrApt,currentScreen} = useContext(AppContext);
    const [isFavorite,SetFavorite] = useState(false);

    useEffect(() => {
        const favList = JSON.parse(localStorage.getItem("favList"));
        if (favList===null) SetFavorite(false);
        else
            SetFavorite(favList.some(el => el === props.apt.apt_id));
    },[]);

    const handleClick = () => {
        setCurrApt(props.apt);
        navigate('/apt-details');
    }

    const handleClickFavorite = () => {
        let favList = JSON.parse(localStorage.getItem("favList"));
        if (favList===null) favList = [];
        if (isFavorite) {
            favList = favList.filter(el => el !== props.apt.apt_id);
        } else {
            favList.push(props.apt.apt_id);
        }
        localStorage.setItem("favList",JSON.stringify(favList));
        if (currentScreen === 'apt-list')
            SetFavorite( !isFavorite);
        else
            setRefreshFavs(!refreshFavs);
    }

    const itensDont = [];
    const itensHave = [];
    const labels = {elevators: 'elevators', central_ac: 'central AC', split_ac: 'split AC', safe_room: 'safe room', storage_room: 'storage room',
     accessible: 'accessible', refurbished: 'refurbished', furniture: 'furniture', pets: 'pets', dud_shemesh: "sun water heating"}
     for (let i in props.apt) {
        if (labels[i])
            if(props.apt[i])
                itensHave.push(labels[i])
            else
                itensDont.push(labels[i])
     }
     if (!props.apt.balconies)
        itensDont.push("balconies")
     if (!props.apt.parkings)
        itensDont.push("parking spaces")



    return (
        <Box style={{position: 'relative'}}>
        <IconButton sx={{zIndex: 30, position: 'absolute', right: '10%', top: '38%'}} onClick={handleClickFavorite}>
            { isFavorite 
            ?  <FavoriteIcon sx={{fontSize: '1rem', border:'1px solid grey', borderRadius:'10%', backgroundColor: 'white', p:1 ,margin:'0 auto'}}/>
            :  <FavoriteBorderIcon sx={{fontSize: '1rem', border:'1px solid grey', borderRadius:'10%', backgroundColor: 'white', p:1 ,margin:'0 auto'}}/> 
            }
        </IconButton>
    <container onClick={handleClick} >
        <Box mt={2} sx={{width: '100%', height: '450px', position: 'relative', border: '1px solid white', '&:hover' : {
            boxShadow: 3
        }}}>
            <Box sx={{ width:"80%", height: "45%", margin: '0 auto', marginTop: '15px', position: 'relative',
            backgroundImage: `url(${serverUrl}/photos/${props.apt.apt_id.toString().padStart(4,'0')}-1.jpeg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat' }}>
                <Box sx={{ zIndex:'20', backgroundColor: 'grey', opacity: '50%', width:"100%", height: "30%", position: 'absolute', bottom: '0', left: '0'}}>
                </Box>
                    <Box  sx={{typography: 'body2', zIndex:'30', color: 'white', position: 'absolute', bottom: '2%', left: '5%', fontWeight: 'bold'}} > 
                        <Stack sx={{textAlign:"left"}}>
                            {props.apt.city} {props.apt.neighborhood ? " - "+props.apt.neighborhood : ""}<br/>
                            {props.apt.street}
                        </Stack>
                    </Box> 
                    <Box  sx={{typography: 'body2', zIndex:'30', padding: '2px', backgroundColor: 'white', color: 'grey', position: 'absolute', top: '10%', right: '5%', fontWeight: 'bold', borderRadius:'10%'}} > 
                        <Stack sx={{textAlign:"left"}}>
                            {props.apt.photos_qty-1 > 0 ? "+"+(props.apt.photos_qty-1).toString() : ""}
                        </Stack>
                </Box> 

            </Box>
            <Stack ml={5} mr={5} spacing={1} sx={{typography: 'body2', textAlign:"left"}}>
            {props.apt.bedrooms} bedrooms  {props.apt.bathrooms} bathrooms   <br/>
            {props.apt.balconies === 0 ? "" : props.apt.balconies === 1 ? props.apt.balconies+" balcony" : props.apt.balconies+" balconies" }
            {props.apt.balconies === 0 ? "" : " "}
            {props.apt.parkings === 0 ? "" : props.apt.parkings === 1 ? props.apt.parkings+" parking space" : props.apt.parkings+" parking spaces" }<br/>
            {props.apt.parkings === 0 ? "" : "\n"}
                Rent: ${props.apt.price} Arnona: ${props.apt.arnona ? props.apt.arnona : "-" }<br/>
                Vaad: ${props.apt.vaad ? props.apt.vaad : '-'} Size: {props.apt.size}m²
                <Stack direction={'row'} sx={{fontSize: '0.7rem', display:'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '5px'}}>
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
        </Box>
    </container>
    </Box>
    )
}

export default AptCard;