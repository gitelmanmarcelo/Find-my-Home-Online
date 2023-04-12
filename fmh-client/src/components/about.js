import { useNavigate } from "react-router-dom";
import { Paper, Stack, Typography, Button } from "@mui/material"; 

function About() {

    const navigate = useNavigate();

    return (
        <Paper sx={{p: 5, textAlign: 'justify', mx:'auto', my: 2, width:'80vw', height:'70vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} spacing={4}>
                <Typography variant="h4" color="#1976d2">
                    About us
                </Typography>
                <Stack sx={{px:0, py:2}} spacing={8} direction={'row'}>
                    <Typography variant="h6">
                        Welcome to Find My Home, where we strive to offer a seamless and stress-free experience for all your property buying and selling needs. Our website is designed with a clean interface to make it easy for you to navigate and find the information you need.
                        At our company, we understand that buying or selling a property can be a complex and time-consuming process. That's why we're here to help you every step of the way. From finding your dream home or selling your current property, to providing legal advice and fixing any issues that may arise, we are dedicated to providing you with exceptional service.
                    </Typography>
                    <Typography variant="h6">
                        Our team of experienced real estate professionals has the expertise and knowledge to help you navigate the real estate market with ease. 
                        We are committed to providing personalized service that meets your individual needs, and we take pride in our ability to make the entire process as smooth and stress-free as possible.
                        We believe in transparency and honesty, and we always put our clients' interests first. Whether you are a first-time buyer or an experienced investor, we will work tirelessly to help you achieve your real estate goals.
                        Thank you for choosing our real estate company for your property buying and selling needs. We look forward to serving you and helping you achieve your real estate dreams.
                    </Typography>
                </Stack>
                <Button variant="contained" sx={{ width: 100}} onClick={() => {navigate('/home')}}>Home</Button>
            </Stack>
        </Paper>
    );
}

export default About;