import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { KEY } from ''

const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "50%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey= {KEY} >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;