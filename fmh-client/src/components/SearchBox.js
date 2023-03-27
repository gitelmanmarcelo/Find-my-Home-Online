import {useState,useContext} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBox = (props) => {

    const [cities,setCities] = useState([]);
    const [city,setCity] = useState("");

    const handleCityChange = (e) => {
      console.log('aaaaaa')
        if (!e.target.value)
          return;
        if (e.target.value.length <= 93) {

          fetch("https://api.geoapify.com/v1/geocode/autocomplete?filter=countrycode:il&type=city&text="+ e.target.value+"&apiKey=80709814e7e6427bb6690f835209cb5e")
            .then( res => res.json())
            .then(data => {
              console.log(data.features)
              setCities(data.features
                .filter(el => el.properties.city !== undefined)
                .map(el => el.properties.city))
            })
              // console.log('cities:',cities);
            // })
            .catch (err => { console.log("autocomplete fetch error: ", err)})
          
        } else if (e.target.value.length === 0) 
            cities.length = 0;
    }

    const handleCitySet = (newInputValue) => {
      setCity(newInputValue);
    }

const test = () => {

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'fsq33HJgfbzHeCYfE6d8+jV51hXUo1Xiw860RVz/Z+P0FtM='
  }
};
// id=FEUF03AFTNPJOT2LQG1QAA2O3SYNBO0GPCNG5FCJDSDJGVT2
// secret=P0APADJMJZ4KLLMP3OIHX15FQP05GDKF452NO2ZSB22XV4UJ

// api google=AIzaSyCU9_uOBmTbPd6e_MLkKhNh231kZJ8zQZc

// JavaScript Instructor09:39
// https://www.latlong.net/convert-address-to-lat-long.html


// https://developers.google.com/maps/documentation/javascript/place-autocomplete

// https://www.smarty.com/products/international-address-autocomplete

// https://www.geoapify.com/address-autocomplete

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=neighborhoods+in+Hertzlia&key=AIzaSyCU9_uOBmTbPd6e_MLkKhNh231kZJ8zQZc

{/* <country>
<countryCode>IL</countryCode>
<countryName>Israel</countryName>
<isoNumeric>376</isoNumeric>
<isoAlpha3>ISR</isoAlpha3>
<fipsCode>IS</fipsCode>
<continent>AS</continent>
<continentName>Asia</continentName>
<capital/>
<areaInSqKm>20770.0</areaInSqKm>
<population>8883800</population>
<currencyCode>ILS</currencyCode>
<languages>he,ar-IL,en-IL,</languages>
<geonameId>294640</geonameId>
<west>34.267257</west>
<north>33.2908350000001</north>
<east>35.67033</east>
<south>29.490654862</south>
<postalCodeFormat>#######</postalCodeFormat>
</country> */}



const city = "New York";

fetch(`https://api.foursquare.com/v2/venues/explore?near=${city}&section=neighborhood`,options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


// const city = "New York"; // replace with the name of the city you want to get neighborhoods for

// const apiUrl = `https://api.foursquare.com/v2/venues/explore?near=${city}&section=neighborhood&client_secret=fsq33HJgfbzHeCYfE6d8+jV51hXUo1Xiw860RVz/Z+P0FtM=&v=20220326`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // const neighborhoods = data.response.groups[0].items.map(item => item.name);
//     // console.log(neighborhoods);
//     console.log(data);
//   })
//   .catch(error => console.log(error));
}

  test()

    return (
        <>
        <Autocomplete
        // value={value}
        // inputValue={inputValue}
        onChange={(event, newInputValue) => { handleCitySet(newInputValue)}}
        onInputChange={(event, newInputValue) => {
          handleCityChange(event);
        }}
        id=""
        options={cities}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Enter a city..." />}
      />
        </>
    )

}

export default SearchBox;