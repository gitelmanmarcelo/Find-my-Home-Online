import { Loader } from '@googlemaps/js-api-loader';
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { apiKey } from '../secret/apiKey';


const AutocompleteInput = () => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [place, setPlace] = useState({});
  const {setLocalData} = useContext(AppContext);


  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['places'],
    });

    const options = {
        componentRestrictions: { country: "il" }
      };

    loader.load().then(() => {
      const autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById('autocomplete-input'),options
      );
      setAutocomplete(autocomplete);

      autocomplete.addListener('place_changed', () => {
        const location = autocomplete.getPlace();
        switch (location.types[0]) {
            case 'neighborhood':
              setLocalData({neighborhood: location.name, city: location.address_components[1].long_name})
              break;
            case 'locality':
              setLocalData({city: location.name})
              break;
            case 'route':
              setLocalData({street: location.name, city: location.address_components[1].long_name})
              break;
            default:
              console.log('other');
        }
        setInputValue(location.name);
      });
    });
  }, [place]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input style={{width:'100%', height:'2rem', fontSize: '1rem', borderRadius: '5px'}}
        id="autocomplete-input"
        type="text"
        placeholder="Enter city, neigborhood or street ..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
};

export default AutocompleteInput;