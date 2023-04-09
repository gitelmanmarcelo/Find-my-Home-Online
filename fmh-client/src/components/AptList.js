import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Paper, Drawer, Box, Button } from "@mui/material";
import AptCard from "./AptCard";
import LocationSearchInput from "./LocationSearchInput";
import SimpleFilters from "./SimpleFilters";
import AdvancedFilters from "./AdvancedFilters";


function AptList() 
{
    const {searchOptions,setSearchOptions,localData} = useContext(AppContext);
    const [aptList,setAptList] = useState([]);
    const [isDrawerOpen,setDrawerOpen] = useState(false);

    useEffect(() => {
        console.log('effect')
        console.log(searchOptions)
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
            console.log(data); 
            if (data[0])
                setAptList(data)
            else
                setAptList([]);
        })
        .catch(err => console.log("ERR:",err))
    },[searchOptions])


    console.log('aptlist=',aptList)

    return (
        <Box sx={{ width: '97%', margin : '0px', display: 'flex', position: 'relative', justifyContent: 'center'}}>
            <Button variant="contained"
            sx={{ position: "fixed", top: 110, left: 28, zIndex: 2000 }}
            onClick={() => setDrawerOpen(isDrawerOpen ? false : true)}>{isDrawerOpen ? "Close <" : "More filters >"}</Button>
            <Drawer sx={{marginTop: '150px'}} open={isDrawerOpen} onClose={() => {setDrawerOpen(false)}}>
                <Box sx={{backgroundColor: 'white', left: '10px', top: '70px', width:450, paddingTop:18, paddingLeft:2}}>
                    <AdvancedFilters/>
                </Box>
            </Drawer>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: '10px', marginTop: '37px'}}>

            {
                aptList.map(apt => (
                    <div>
                    <AptCard apt={apt}/>
                    </div>
                ))
            }
            </div>
        </Box>
    )
}

export default AptList;