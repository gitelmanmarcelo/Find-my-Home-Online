import { Paper, Stack, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import './aptdetails.css'

let img1 = "visible";
let img2 = "visible";
let img3 = "visible";

function AptDetail(props) {

    const {currentApt,setCurrApt} = useContext(AppContext);


    const handleClick = () => {
        if (currentApt.photos_qty < 4)
            return;
        const temp = [...images];
        temp.shift();
        if (temp[1] === currentApt.photos_qty)
            temp.push(1);
        else
            temp.push(temp[1]+1);
        setImages(temp);
    }

    const [images,setImages] = useState([])
    console.log(currentApt);

    useEffect(() => {
        console.log('photos-qty',currentApt.photos_qty)
        if (currentApt.photos_qty === 1)
        {
            img2 = "hidden";
            img3 = "hidden";
            setImages([1,0,0]);

        }
        else if (currentApt.photos_qty === 2)
        {
            img2 = "visible"
            img3 = "hidden";
            setImages([1,2,0]);
            
        }
        else {
            img2 = "visible"
            img3 = "visible"
            setImages([1,2,3]);

        }
    },[currentApt.photos_qty]);

    return (
         <Paper  sx={{ width: '60%', height:'1%' }}>
            <Stack direction='row' spacing={2}> 
            <Button onClick={handleClick}>button</Button>

                <div className={img1}>
                    <img style={{width:'100%'}} src={"http://localhost:5000/photos/"+ currentApt.apt_id.toString().padStart(4,'0') + "-" + images[0] + ".jpeg"} />
                </div>
                <div className={img2}>
                    <img style={{width:'100%'}} src={"http://localhost:5000/photos/"+ currentApt.apt_id.toString().padStart(4,'0') + "-" + images[1] + ".jpeg"} />
                </div>
                <div className={img3}>
                    <img style={{width:'100%'}} src={"http://localhost:5000/photos/"+ currentApt.apt_id.toString().padStart(4,'0') + "-" + images[2] + ".jpeg"} />
                </div>
                <Button onClick={handleClick}>button</Button>
           </Stack>
           
           {currentApt.city}<br/>
           {currentApt.street}<br/>
           {currentApt.bedrooms}<br/>
           {currentApt.bathrooms}<br/>
           {currentApt.price}<br/>
        </Paper>
    )
}

export default AptDetail;