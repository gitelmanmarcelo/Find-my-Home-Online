import {useState,useContext} from 'react';
import TextField from '@mui/material/TextField';

const SearchBox = (props) => {
//   function abc() {

//    console.log('abc')

// const input = document.getElementById("city-input"); // Replace with the ID of your input element
// const country = "IL"; // The country code for Israel
// const apikey = ""; // Replace with your Google Maps API key
// const autocomplete = new google.maps.places.Autocomplete(input, {
// //   types: ["(cities)"],
// componentRestrictions: {  country : country },
// apiKey: apikey
// });

// autocomplete.addListener("place_changed", () => {
// const place = autocomplete.getPlace();
// for (const component of place.address_components) {}
//    console.log(place);
// });

// }



    return (
        <>
        {/* <input type="text" name="" id="city-input" required autocomplete="off"></input> */}
        <input type="text" name="" id="city-input" required></input>

 

        </>
    )

}

export default SearchBox;