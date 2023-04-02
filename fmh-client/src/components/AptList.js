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
        <Paper sx={{ width: '97%', margin : '30px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="contained"
          sx={{ position: "fixed", top: 80, left: 10, zIndex: 2000 }}
          onClick={() => setDrawerOpen(isDrawerOpen ? false : true)}>{isDrawerOpen ? "Close" : "More filters"}</Button>
          <Drawer  open={isDrawerOpen} onClose={() => {setDrawerOpen(false)}}>
            <Box sx={{width:450, paddingTop:8, paddingLeft:2}}>
                <SimpleFilters/>
                <AdvancedFilters/>
            </Box>
          </Drawer>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: '70px'}}>

        {
            aptList.map(apt => (
                <div>
                <AptCard apt={apt}/>
                </div>
            ))
        }
        </div>
        </Paper>
    )
}

export default AptList;