import React from 'react';
import Map from './components/Map.jsx'
import MarkerContainer from './components/MarkerContainer.jsx'

const App = () => {
  return(
    <div id="main-container">
      <Map />
      <MarkerContainer />
    </div>
  );
};

export default App;