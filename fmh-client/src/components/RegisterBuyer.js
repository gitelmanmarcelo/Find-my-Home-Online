import { Stack,  TextField, Typography, Button, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../serverUrl";

function RegisterBuyer() {

    const [registerData,setRegisterData] = useState({});
    const [msg,setMsg] = useState("");

    const navigate = useNavigate();

    const handleRegisterClick = (e) => {

        fetch(serverUrl+"/buyer/register",{ 
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
            navigate('/buyer/register/success')
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
      <Paper sx={{width:{xs:'90vw',sm:'50vw'}, height:'70vh', margin: '20px auto', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>

        <Typography variant="h5" color='#1976d2' mt={8} sx={{textAlign:'center'}}>
          Please provide some contact information:
        </Typography>
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
            value={registerData.email}
            onChange={handleRegisterChange}
            onInput={handleRegisterChange}
            variant="standard"
          />
          <TextField
            id="phone"
            label="Phone"
            value={registerData.phone}
            onChange={handleRegisterChange}
            onInput={handleRegisterChange}
            variant="standard"
          />
          
          <Button variant="contained" sx={{marginTop:'30px'}} onClick={handleRegisterClick}>Register</Button>
          <Typography m={2} textAlign={'left'} variant="body">{msg}</Typography>
        </Stack>
      </Paper>
    );
}

export default RegisterBuyer;