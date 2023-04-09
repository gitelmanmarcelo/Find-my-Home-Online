import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { Button, Typography, Paper } from "@mui/material";


function SellerContact() {

  const {currSeller} = useContext(AppContext);

  const navigate = useNavigate();

    return (
        <Paper sx={{height:'70vh', marginTop: '20px', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h3">
                Following the owner contact information:<br/><br/>
            </Typography>
            <Typography variant="h4">
                First Name: {currSeller.fname}<br/><br/>
                Last Name: {currSeller.lname}<br/><br/>
                Email: {currSeller.email}<br/><br/>
                Phone: {currSeller.phone}<br/><br/>
            </Typography>
            <Button sx={{ width: '100px'}}variant="contained" onClick={() => {
                navigate("/home");
            }}>Home</Button>
        </Paper>
    )

}

export default SellerContact;