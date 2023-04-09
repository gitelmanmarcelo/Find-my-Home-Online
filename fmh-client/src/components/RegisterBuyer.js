import { Stack,  TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterBuyer() {

    const [registerData,setRegisterData] = useState({});
    const [msg,setMsg] = useState("");

    const navigate = useNavigate();

    const handleRegisterClick = (e) => {

        fetch("http://localhost:5000/buyer/register",{ 
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
            setRegisterData({});
        })
        .catch (err => {
          setRegisterData({});
          console.log('error:',err);
          setMsg('Registration error');
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
          }
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
              variant="standard"
            />
            <TextField
              id="lname"
              label="Last Name"
              required
              value={registerData.lname}
              onChange={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="email"
              label="Email"
              required
              onChange={handleRegisterChange}
              variant="standard"
            />
            <TextField
              id="phone"
              label="Phone"
              onChange={handleRegisterChange}
              variant="standard"
            />
           
            <Button variant="contained" onClick={handleRegisterClick}>Register</Button>
            <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
            </Stack>
            </>
    );
}

export default RegisterBuyer;