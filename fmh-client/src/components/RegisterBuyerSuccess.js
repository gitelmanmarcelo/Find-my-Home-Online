import { Stack, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function RegisterBuyerSuccess() {

    const navigate = useNavigate();

    return (
        <Paper sx={{margin: '30px auto', width:'80vw', height:'60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} spacing={4}>
                <Typography variant="h4">
                    Registration Successfully!!!
                </Typography>
                <Typography variant="body">
                    Soon our team will get in touch.
                    Thank you for using Find My Home.
                </Typography>
                <Button variant="contained" sx={{ width: '100px'}} onClick={() => {navigate('/home')}}>Home</Button>
            </Stack>
        </Paper>
    )
}

export default RegisterBuyerSuccess;