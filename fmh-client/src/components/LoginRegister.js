import { TextField, Input, Box, FormControl, InputLabel, InputAdornment, Typography, Button, Checkbox } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Stack, textAlign } from "@mui/system";
import { useNavigate } from "react-router-dom";

function LoginRegister() {

    const navigate = useNavigate();

    const [isLogin,setIsLogin] = useState(true);
    const [showPassword,setShowPassword] = useState(false);
    const [loginData,setLoginData] = useState({});
    const [registerData,setRegisterData] = useState({});
    const [msg,setMsg] = useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLoginClick = (e) => {
        fetch("http://localhost:5000/seller/login",{ 
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then (res => {
            if (res.status === 200){
                console.log("success")
                navigate("/apartment/register")
            }
            else {
                console.log('fetch ruim')
                setMsg('User or password error');

            }
        })
        .catch (err => {
            console.log('error:',err);
        })
    }

    const handleLoginChange = (e) => {
        switch (e.currentTarget.id) {
            case 'username':
                setLoginData({...loginData,username: e.currentTarget.value});
                break;
            case 'password':
                setLoginData({...loginData,password: e.currentTarget.value});
                break;
        }
    }
 
    const handleRegisterChange = (e) => {
        switch (e.currentTarget.id) {
            case 'fname':
                setRegisterData({...registerData,fname: e.currentTarget.value});
                break;
            case 'lname':
                setRegisterData({...registerData,fname: e.currentTarget.value});
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
        }
    }

    if (isLogin) {
        return (<>
            <Typography m={10} textAlign={'left'} variant="h3">Login</Typography>
            <Stack m={8} sx={{width:'300px'}}>
            <TextField
              id="username"
              label="Username"
              onChange={handleLoginChange}
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
              onChange={handleLoginChange}
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
            <Button variant="contained" onClick={handleLoginClick}>Login</Button>
            <Button variant="text" onClick={() => setIsLogin(false)}>Register</Button>
        <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
            </Stack>
            </>
        )
    } else {   // REGISTER
        return ( 
        <>
            <Typography m={10} textAlign={'left'} variant="h3">Register</Typography>
            <Stack m={8} sx={{width:'300px'}}>
            <TextField
              id="fname"
              label="First Name"
              onChange={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="lname"
              label="Last Name"
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
            <Checkbox>Allow direct contact</Checkbox>
            <Button variant="contained" onClick={handleLoginClick}>Register</Button>
        <Button variant="text" onClick={() => setIsLogin(true)}>Login</Button>
            <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
            </Stack>
            </>

        )
    }

}

export default LoginRegister;