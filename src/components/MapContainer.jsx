import { GoogleMap, LoadScript } from '@react-google-maps/api';
require('dotenv').config()

const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "50%",
    borderRadius: '5px'
  };
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey= {process.env.KEY} >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;