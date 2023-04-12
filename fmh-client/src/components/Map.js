import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { apiKey } from '../secret/apiKey';

const Map = (props) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 16
      });

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: props.address }, (results, status) => {
        if (status === 'OK') {
          const marker = new window.google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          map.setCenter(results[0].geometry.location);
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }, []);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>;
};

export default Map;
