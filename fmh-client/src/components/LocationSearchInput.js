import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './LocationSearchInput.css'
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = (address,placeId,suggestion) => {
    // if (suggestion === null)
    //   return;
    // console.log(address)
    // console.log(placeId)
    this.setState({ address });

    console.log("sugg:",suggestion)
    switch (suggestion.types[0]) {
      case 'neighborhood':
        console.log('neighborhood');
        console.log(suggestion.formattedSuggestion.mainText)
        break;
      case 'locality':
        console.log('city')
        console.log(suggestion.formattedSuggestion.mainText)
        break;
      case 'route':
        console.log('street')
        console.log(suggestion.formattedSuggestion.mainText)
        console.log(suggestion.terms[1].value)
        break;
      default:
        console.log('other');
    }
  };
 
  render() {

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
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
}

export default LocationSearchInput;