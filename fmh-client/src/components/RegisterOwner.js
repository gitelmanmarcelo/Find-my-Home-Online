import { Stack, FormControlLabel, TextField, InputAdornment, Typography, Button, Checkbox } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../serverUrl";

function RegisterOwner() {

    const [registerData,setRegisterData] = useState({});
    const [msg,setMsg] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleRegisterClick = (e) => {
        if (registerData.confirmPassword !== registerData.password) {
          setMsg("passwords don't match");
          return;
        } else {
          delete registerData.confirmPassword;
          setMsg("");
        }

        if (!registerData.accept_contact)
          registerData.accept_contact = false;
        fetch(serverUrl+"/seller/register",{ 
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(registerData)
        })
        .then (res => {
            if (res.status !== 200){
              setMsg('Registration error');
            }
            else
              navigate('/apt/register')
        })
        .catch (err => {
          console.log('error:',err);
          setMsg('Registration error');
        })
    }

      const handleRegisterChange = (e) => {
      const temp = {...registerData};
      temp[e.target.id] = e.currentTarget.value;
      setRegisterData(temp);
    }  

    return ( 
        <>
            <Stack m={8} sx={{width:'300px'}}>
            <TextField
              id="fname"
              label="First Name"
              required
              value={registerData.fname}
              onChange={handleRegisterChange}
              onInput={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="lname"
              label="Last Name"
              required
              value={registerData.lname}
              onChange={handleRegisterChange}
              onInput={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="email"
              label="Email"
              required
              onChange={handleRegisterChange}
              onInput={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="phone"
              label="Phone"
              onChange={handleRegisterChange}
              onInput={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="username"
              label="Username"
              required
              onChange={handleRegisterChange}
              onInput={handleRegisterChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              type={showPassword ? 'text' : 'password'}
              id="password"
              label="Password"
              required
              onChange={handleRegisterChange}
              onInput={handleRegisterChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={handleClickShowPassword}
                    >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              label="Confirm password"
              required
              onChange={handleRegisterChange}
              onInput={handleRegisterChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={handleClickShowPassword}
                    >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <FormControlLabel sx={{width:'500px', color: 'grey'}}control={<Checkbox id="accept_contact" onClick={handleRegisterChange} />} label="Allow us to share your contact with buyer" />
            <Button variant="contained" onClick={handleRegisterClick}>Register</Button>
            <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
            </Stack>
            </>
    );
}

export default RegisterOwner;