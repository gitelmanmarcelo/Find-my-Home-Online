import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Drawer, Box, Button } from "@mui/material";
import AptCard from "./AptCard";
import AdvancedFilters from "./AdvancedFilters";


function AptList() 
{
    const {searchOptions,localData,currentScreen,setCurrScreen} = useContext(AppContext);
    const [aptList,setAptList] = useState([]);
    const [isDrawerOpen,setDrawerOpen] = useState(false);

    useEffect(() => {setCurrScreen('apt-list')},[])
    
    useEffect(() => {
        const condition = {...searchOptions};
        if (localData.city !== "") condition.city = localData.city;
        if (localData.neighborhood !== "") condition.neighborhood = localData.neighborhood;
        if (localData.street !== "") condition.street = localData.street;
        fetch("http://localhost:5000/apartment/search",{ 
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
    },[searchOptions])


    return (
        <Box sx={{ width: '97%', margin : '0px', display: 'flex', justifyContent: 'center'}}>
            <Button variant="contained"
            sx={{ position: "fixed", top: 110, left: 28, zIndex: 2000 }}
            onClick={() => setDrawerOpen(isDrawerOpen ? false : true)}>{isDrawerOpen ? "Close <" : "More filters >"}</Button>
            <Drawer sx={{marginTop: '150px'}} open={isDrawerOpen} onClose={() => {setDrawerOpen(false)}}>
                <Box sx={{left: '10px', top: '70px', width:450, paddingTop:18, paddingLeft:2}}>
                    <AdvancedFilters/>
                </Box>
            </Drawer>

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

export default AptList;