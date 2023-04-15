import { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import AptCard from "./AptCard";
import { AppContext } from "../App";
import { serverUrl } from "../serverUrl";


function FavsList() 
{
    const [aptList,setAptList] = useState([]);
    const {refreshFavs,setCurrScreen} = useContext(AppContext);

    useEffect(() => {setCurrScreen('favorites')},[])

    useEffect(() => {
        const condition = JSON.parse(localStorage.getItem("favList"));

        fetch(serverUrl+"/apartment/getFavs",{ 
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({condition:condition})
        })
        .then(response => response.json())
        .then(data => {
            if (data[0])
                setAptList(data)
            else
                setAptList([]);
        })
        .catch(err => console.log("ERR:",err))
    },[refreshFavs])


    return (
            <Grid container sx={{width:'100%'}} spacing={5}>
            {
                aptList.map((apt,index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <AptCard apt={apt}/>
                    </Grid>
                ))
            }
            </Grid>
    );
}

export default FavsList;