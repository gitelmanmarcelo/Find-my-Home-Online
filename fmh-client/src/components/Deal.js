import { Grid,Stack, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { serverUrl } from "../serverUrl";
  
function Deal() {

const navigate = useNavigate();
const {setCurrSeller} = useContext(AppContext);

const handleSelfClick = () => {
    fetch(serverUrl+'/seller/getSeller',{ 
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
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{position: 'relative', height: {xs:'600px', sm:'400px'}, borderRadius: '5px', backgroundColor: 'white', marginRight:'20px', padding:'30px'}}>
                            <Stack sx={{flexDirection:{xs:'column', sm:'row'}, alignItems: 'center'}} >
                            <i style={{fontSize:"7rem", margin:'30px 30px'}}class="fa-solid fa-umbrella-beach"></i>
                            <Typography variant="h5" sx={{width: '280px', textAlign:'justify'}}>
                                    1. Make a deal through <em>Find my Home</em>:
                                        This way you can stay realaxed because we take care of every detail including paper, legal advise etc. You just have to move in and enjoy your new home.
                                </Typography>
                            </Stack>
                            <Box sx={{width:'100%', position: 'absolute', bottom: '5%', left:0}}>
                            <Button onClick={() => {
                                navigate("/buyer/register");
                            }} sx={{width:'300px', margin: '0 auto',}} variant="contained">Let 
                                "Find my Home" take care of everything I will go to the beach now</Button>

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{position: 'relative', height: {xs:'500px', sm:'400px'}, borderRadius: '5px', backgroundColor: 'white', marginTop: {xs:'20px', sm:'0'}, padding:'30px'}}>
                            <Stack sx={{flexDirection:{xs:'column', sm:'row'}, alignItems: 'center'}} spacing={4}>
                                <i style={{fontSize:"7rem", margin:'30px 30px'}} class="fa-regular fa-address-book"></i>
                                <Typography variant="h5" sx={{width:'280px', textAlign:'justify'}}>
                                    2. Get the contact of the owner and talk directly to him or her. This way <em>Find my home</em> is not responsible.
                                </Typography>
                            </Stack>
                            <Box sx={{width:'100%', position: 'absolute', bottom: '5%', left:0}}>
                                <Button onClick={handleSelfClick} sx={{width:'300px', margin:'0 auto'}} variant="contained">I'd rather take care of it on my own. Please provide me with the owner contact</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Stack>
        </Box>        
    );

}

export default Deal;