import React, { useEffect, useState } from 'react';
import Map from './components/Map.jsx'
import MarkerContainer from './components/MarkerContainer.jsx'
import { getAllDevices } from './services'

const App = () => {
  const [markers, updateMarkers] = useState([]);
  
  useEffect(() => {
    const interval =  setInterval(() => {
      fetchDevices();
    }, 5000);
    fetchDevices();
    return () => clearInterval(interval);
  }, []); 
  
  const fetchDevices = async() => {
    const devices = await getAllDevices()
    updateMarkers(devices);
  }

  console.log(markers)  

  return(
    <div id="main-container">
      <Map markers={markers} />
      <MarkerContainer />
    </div>
  );
};

export default App;