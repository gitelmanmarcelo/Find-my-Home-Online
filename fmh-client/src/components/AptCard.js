import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { Box } from "@mui/material";

function AptCard(props) {
    const navigate = useNavigate();
    const {currentApt,setCurrApt} = useContext(AppContext);

    const handleClick = () => {
        setCurrApt(props.apt);
        navigate('/apt-details');
    }

    return (
    <div onClick={handleClick} style={{width:'15vw'}}>
        <Box sx={{backgroundColor: 'cyan'}}>
        <img style={{width:'100%'}} src={"http://localhost:5000/photos/" + props.apt.apt_id.toString().padStart(4,'0')+"-1.jpeg" }/>
        {props.apt.bedrooms}<br/>
        {props.apt.street}<br/>
        ${props.apt.price}<br/>
        </Box>
    </div>
    )
}

export default AptCard;