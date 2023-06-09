import LoginOwner from "./LoginOwner";
import "./LoginRegister.css"
import { useState } from "react";
import RegisterOwner from "./RegisterOwner";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import RegisterSmallDevices from "./RegisterSmallDevices";

const LoginRegister = (props) => {

  const [overlayClass,setOverlayClass] = useState("moveO-50");
  const [overlayContainerClass,setOverlayContainerClass] = useState("moveOC100");

  return (
<main>
  <section>
    <div className="small_devices">
        <LoginOwner/>
        <p>Click <Link to="/RegisterSmallDevices">here</Link> to register</p>
    </div>
    <div className="container">
      <div className={"form sign-in-form"}>
        <div>
          <LoginOwner/>
        </div>
      </div>
      <div className={"form sign-up-form"}>
        <div className="wrapper">
          <RegisterOwner/>
        </div>
      </div>
      <Box className={"overlay-container "+overlayContainerClass} >
        <Box className={"overlay "+overlayClass} sx={{backgroundColor:"primary.main"}}>
          <Stack spacing={2} className="overlay-left" >
          <Typography sx={{color:"white", fontSize: "3rem" }}>
          <i class="fa-regular fa-address-card"></i>
          </Typography>
          <Typography sx={{color:"white" }}>
          Register Here&nbsp;&nbsp;&nbsp;<i class="fa-sharp fa-solid fa-arrow-right"></i>
          </Typography>
          <Typography sx={{color:"white" }}>
              or
          </Typography>
            <Button variant="contained" sx={{width: '100px', backgroundColor:"text.secondary"}} onClick={() => {
              setOverlayContainerClass("moveOC100");
              setOverlayClass("moveO-50");
            }} id="signInButton">Log In</Button>
          </Stack>
          <Stack spacing={2} className="overlay-right">
          <Typography sx={{color:"white", fontSize: "3rem" }}>
          <i class="fa-solid fa-lock"></i>
          </Typography>
          <Typography sx={{color:"white" }}>
          <i class="fa-sharp fa-solid fa-arrow-left"></i>&nbsp;&nbsp;&nbsp;Please, Log In
          </Typography>
            <Typography sx={{color:"white" }}>
              or
            </Typography>
            <Button variant="contained" sx={{backgroundColor:"text.secondary"}} onClick={() => {
              setOverlayContainerClass("moveOC0")
              setOverlayClass("moveO0")
            }} id="signUpButton">Register</Button>
          </Stack>
        </Box>
      </Box>
    </div>
  </section>
</main>
  )
}

export default LoginRegister;
