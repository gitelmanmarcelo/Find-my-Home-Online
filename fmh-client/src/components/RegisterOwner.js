import { Stack, FormControlLabel, TextField, InputAdornment, Typography, Button, Checkbox } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterOwner() {

    const [registerData,setRegisterData] = useState({});
    const [msg,setMsg] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleRegisterClick = (e) => {
        if (!registerData.accept_contact)
          registerData.accept_contact = false;
        fetch("http://localhost:5000/seller/register",{ 
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(registerData)
        })
        .then (res => {
            if (res.status === 200){
              // setIsLogin(true);
            }
            else {
              setMsg('Registration error');
            }
            setRegisterData({});
        })
        .catch (err => {
          setRegisterData({});
          console.log('error:',err);
        })
    }

    const handleRegisterChange = (e) => {
        console.log(registerData)
          switch (e.target.id) {
              case 'fname':
                  setRegisterData({...registerData,fname: e.currentTarget.value});
                  break;
              case 'lname':
                  setRegisterData({...registerData,lname: e.currentTarget.value});
                  break;
              case 'email':
                  setRegisterData({...registerData,email: e.currentTarget.value});
                  break;
              case 'phone':
                  setRegisterData({...registerData,phone: e.currentTarget.value});
                  break;
              case 'username':
                  setRegisterData({...registerData,username: e.currentTarget.value});
                  break;
              case 'password':
                  setRegisterData({...registerData,password: e.currentTarget.value});
                  break;
              case 'accept_contact':
                  setRegisterData({...registerData,accept_contact: e.target.checked});
                  break;
          }
      }
  

    return ( 
        <>
            <Typography m={10} textAlign={'left'} variant="h3">Register</Typography>
            <Stack m={8} sx={{width:'300px'}}>
            <TextField
              id="fname"
              label="First Name"
              value={registerData.fname}
              onChange={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="lname"
              label="Last Name"
              value={registerData.lname}
              onChange={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="email"
              label="Email"
              onChange={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="phone"
              label="Phone"
              onChange={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="username"
              label="Username"
              onChange={handleRegisterChange}
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
              onChange={handleRegisterChange}
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
              onChange={handleRegisterChange}
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
            <FormControlLabel control={<Checkbox id="accept_contact" onClick={handleRegisterChange} />} label="Allow us to share your contact with buyer" />
            <Button variant="contained" onClick={handleRegisterClick}>Register</Button>
        <Button variant="text" onClick={() => navigate("/login-owner")}>Login</Button>
            <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
            </Stack>
            </>
    );
}

export default RegisterOwner;