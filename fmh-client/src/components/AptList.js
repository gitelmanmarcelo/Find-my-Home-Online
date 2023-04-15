import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Grid, Container, Drawer, Box, Button } from "@mui/material";
import AptCard from "./AptCard";
import AdvancedFilters from "./AdvancedFilters";
import { serverUrl } from "../serverUrl";


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
        fetch(serverUrl+"/apartment/search",{ 
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
        <div> 
            <Button variant="contained"
            sx={{ position: "fixed", top: 110, left: 28, zIndex: 60 }}
            onClick={() => setDrawerOpen(isDrawerOpen ? false : true)}>{isDrawerOpen ? "Close <" : "More filters >"}</Button>
            <Drawer sx={{zIndex:40, marginTop: {xs: '0', sm: '150px' } }} open={isDrawerOpen} onClose={() => {setDrawerOpen(false)}}>
                <Box sx={{left: '10px', top: '70px', width:450, paddingTop:18, paddingLeft:2}}>
                    <AdvancedFilters/>
                </Box>
            </Drawer>

            <Grid container sx={{width:'100%'}} spacing={5}>
            {
                aptList.map((apt,index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <AptCard apt={apt}/>
                    </Grid>
                ))
            }
            </Grid>
        </div>
    );
}

export default AptList;