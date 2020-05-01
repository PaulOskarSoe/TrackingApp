import React, { useEffect } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const MapContainer = ({markers}) => {
  const initialPosition = [59.4370, 24.7536]

  // useEffect(() => {
  //   renderMarkers()
  // }, [markers])

  const renderMarkers = () => markers && markers.map((marker) => (
    <Marker position={[marker.latitude, marker.longitude]}/>
  ));

  return (
    <Map center={initialPosition} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderMarkers()}
    </Map>
  )
}

export default MapContainer;
