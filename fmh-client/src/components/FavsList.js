import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
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
        <Box sx={{ width: '97%', margin : '0px', display: 'flex', justifyContent: 'center'}}>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: '10px', marginTop: '37px'}}>
            {
                aptList.map((apt,index) => (
                    <div key={index}>
                        <AptCard apt={apt}/>
                    </div>
                ))
            }
            </div>
        </Box>
    );
}

export default FavsList;