import { TextField, InputAdornment, Typography, Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import RegisterOwner from "./RegisterOwner";

function LoginOwner() {

    const navigate = useNavigate();

    const [isLogin,setIsLogin] = useState(true);
    const [showPassword,setShowPassword] = useState(false);
    const [loginData,setLoginData] = useState({});
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
                navigate("/apt/register")
            }
            else {
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
 

    if (isLogin) {
        return (<>
            <Typography m={10} textAlign={'left'} variant="h3">Login</Typography>
            <Stack m={8} sx={{width:'300px'}}>
            <TextField
              id="username"
              label="Username"
              value={loginData.username || ""}
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
            <Button variant="text" onClick={() => navigate('/register-owner')}>Register</Button>
        <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
            </Stack>
            </>
        )
    } else {   // REGISTER
      <RegisterOwner/>
    }

}

export default LoginOwner;