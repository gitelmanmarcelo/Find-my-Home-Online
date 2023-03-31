import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './LocationSearchInput.css'
import { useContext, useState } from "react";
import { AppContext } from "../App";
 
function LocationSearchInput(props) {
 
  const [address,setAddress] = useState('');
  const {searchOptions,setSearchOptions,localData,setLocalData} = useContext(AppContext);
 
  const handleChange = address => {
    setAddress(address);
  };
 
  const handleSelect = (address,placeId,suggestion) => {
    // if (suggestion === null)
    //   return;
    // console.log(address)
    // console.log(placeId)
    setAddress(address);

    console.log("sugg:",suggestion)
    switch (suggestion.types[0]) {
      case 'neighborhood':
        console.log('neighborhood');
        console.log(suggestion.formattedSuggestion.mainText)
        setLocalData({neighborhood: suggestion.formattedSuggestion.mainText, city: suggestion.terms[1].value})
        break;
      case 'locality':
        console.log('city')
        console.log(suggestion.formattedSuggestion.mainText)
        setLocalData({city: suggestion.formattedSuggestion.mainText})
        break;
      case 'route':
        console.log('street')
        console.log(suggestion.formattedSuggestion.mainText)
        setLocalData({street: suggestion.formattedSuggestion.mainText, city: suggestion.terms[1].value})
        break;
      default:
        console.log('other');
    }
  };
 
    return (
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={ {types: ['locality','neighborhood','route'], componentRestrictions: {  country : "IL" }}}
        highlightFirstSuggestion = {true}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search city, neigborhood or street ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
}

export default LocationSearchInput;