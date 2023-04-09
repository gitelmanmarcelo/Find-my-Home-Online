import { TextField, InputAdornment, Typography, Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import RegisterOwner from "./RegisterOwner";
import { useContext, useState } from "react";
import { AppContext } from "../App";

function LoginOwner() {

  
  const {currSeller,setCurrSeller} = useContext(AppContext);
    const navigate = useNavigate();

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
          if (res.status !== 200){
            setMsg('username/password error!')
            throw Error("login error!");
          }
          return res.json()
        } )
        .then (data => {
          setCurrSeller(data.seller_id)
          navigate("/apt/register")
        })
        .catch (err => {
            console.log('fetch error:',err);
            setMsg('username/password error!')
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
 

        return (<>
            <Stack m={8} spacing={2} sx={{width:'300px'}}>
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
            <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
            </Stack>
            </>
        )
    }


export default LoginOwner;