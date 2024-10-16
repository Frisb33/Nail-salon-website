import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const MyMapComponent = () => {
  const apiKey = 'AIzaSyCAceieS0rVSBejwA8-4-22D9nBeFVhrnE';
  console.log(apiKey);
  const mapStyles = {
    width: '100%',
    height: '300px',
  };

  const defaultCenter = {
    lat: 44.48573303222656,
    lng: -80.05744171142578,
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={17}
      >
        <Marker
          position={defaultCenter}
          title="My location"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;