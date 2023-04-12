import { Stack, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
  
function Deal() {

const navigate = useNavigate();
const {setCurrSeller} = useContext(AppContext);

const handleSelfClick = () => {
    fetch('http://localhost:5000/seller/getSeller',{ 
        method: 'POST', 
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({seller_id : seller_id})
    })
    .then (res => {
        if (res.status !== 200)
            throw Error('invalid seller id');
        return res.json();
    })
    .then (data => {
        if (data[0].accept_contact){
            setCurrSeller(data[0]);
            navigate('/seller/contact');
        }
        else {
            alert('Sorry - the owner did not authorize us to show his contact info. Please procceed through our platform');
        }
    })
    .catch (err => {
        console.log('error:',err);
    })
}

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const seller_id = urlParams.get('seller')
    return (
        <Box sx={{margin: '20px auto', backgroundColor:'transparent', border: 'none', paddingTop: '20px', width: '90vw', display:'flex', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center'}}>
            <Stack sx={{display:'flex', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center'}} spacing={4}>
                <Typography variant="h4" >
                    In <em>Find my Home</em> we let you choose between two ways of making a deal:
                </Typography>
                <Stack spacing={4} direction={'row'}>
                    <Stack spacing={3} sx={{backgroundColor: 'white', padding:'30px', borderRadius: '5px'}}>
                        <Stack spacing={4} direction={'row'} >
                            <Typography variant="h5" sx={{width: '350px', textAlign:'justify'}}>
                                1. Make a deal through <em>Find my Home</em>:
                                    This way you can stay realaxed because we take care of every detail including paper, legal advise etc. You just have to move in and enjoy your new home.
                            </Typography>
                            <i style={{fontSize:"7rem"}}class="fa-solid fa-umbrella-beach"></i>
                        </Stack>
                        <Button onClick={() => {
                            navigate("/buyer/register");
                        }} sx={{width:'500px'}} variant="contained">Let 
                            "Find my Home" take care of everything I will go to the beach now</Button>
                    </Stack>

                <Stack  spacing={15} sx={{backgroundColor: 'white', padding:'30px',  borderRadius: '5px'}}>
                    <Stack direction={'row'} spacing={4}>
                        <i style={{fontSize:"7rem"}} class="fa-regular fa-address-book"></i>
                        <Typography variant="h5" sx={{width:'350px', textAlign:'justify'}}>
                            2. Get the contact of the owner and talk directly to him or her. This way <em>Find my home</em> is not responsible.
                        </Typography>
                    </Stack>
                    <Button onClick={handleSelfClick} sx={{width:'500px'}} variant="contained">I'd rather take care of it on my own. Please provide me with the owner contact</Button>
                </Stack>
            </Stack>

        </Stack>
    </Box>        
    );

}

export default Deal;