import { useNavigate } from "react-router-dom";
import { Grid, Box, Stack, Typography, Button } from "@mui/material"; 

function Contact() {

    const navigate = useNavigate();

    return (
        <Box sx={{margin: '15px auto', backgroundColor:'transparent', border: 'none', width: '90vw', display:'flex', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center'}}>
            <Stack sx={{backgroundColor:'transparent',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} spacing={4}>
                
                <Typography variant="h4" color="#1976d2">
                    Let's get in touch
                </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs:'flex-start', sm:'flex-end'}}}>
                            <Box sx={{borderRadius:'10px', backgroundColor: 'white', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center',width: 400, height: 200}}>
                                <Typography variant="h6">
                                    Come here to have a coffee with us 
                                </Typography >
                                <span style={{margin: '6px', fontSize:'3rem', color: "#1976d2"}}>
                                    <i className="fa-solid fa-mug-saucer"></i>
                                </span>
                                <Typography variant="h6">
                                    Realty Street, 22 / 15th floor - Ramat Gan
                                </Typography>
                            </Box>  
                        </Grid >
                        <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent:'flex-start'}}>
                            <Box sx={{borderRadius:'10px', backgroundColor: 'white', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center',width: 400, height: 200}}>
                                <Typography variant="h6">
                                    call for any question:
                                </Typography>
                                <span style={{fontSize:'3rem', color:"#1976d2"}}>
                                    <i className="fa-solid fa-phone-flip"></i>
                                </span>    
                                <Typography variant="h6">
                                    073-123456
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent:{xs:'flex-start', sm:'flex-end'}}}>
                            <Box sx={{borderRadius:'10px', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center',backgroundColor: 'white', width: 400, height: 200}}>
                                <Typography variant="h6">
                                    Send us an email:
                                </Typography>
                                <span style={{fontSize:'3rem', color:"#1976d2"}}>
                                <i className="fa-regular fa-envelope"></i>
                                </span>
                                <Typography variant="h6">
                                    callus@findmyhome.co.il
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent:'flex-start'}}>
                            <Box sx={{borderRadius:'10px', backgroundColor: 'white', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center',width: 400, height: 200}}>
                                <Stack spacing={4} sx={{borderRadius:'10px', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography variant="h6">
                                        Visit our social networks:
                                    </Typography>
                                    <Stack spacing={2} direction={'row'}
                                    sx={{fontSize:'3rem', color:"#1976d2"}}>
                                        <i className="fa-brands fa-square-facebook"></i>
                                        <i className="fa-brands fa-instagram"></i>
                                        <i className="fa-brands fa-square-twitter"></i>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                        <Button variant="contained" sx={{ margin: '20px auto', width: 100}} onClick={() => {navigate('/home')}}>Home</Button>
                    </Grid>
                </Stack>
        </Box>
    );
}

export default Contact;