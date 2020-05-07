import React from 'react';

const MarkerContainer = ({markers}) => {

  const renderMarkers = markers.map((marker, i) => {
    console.log('marker:', marker);
    return(
      <div>
        <br/>
        <span>Seadme nimi: {marker.deviceName}</span>
      </div>
      // <div>{marke}</div>
    )
  })

  return(
    <div id="marker-container">
      <div id="marker-content">
        <h3 id="marker-content-header">ASUKOHAD</h3>
        <hr/>
        {renderMarkers}
      </div>
    </div>
  )
}

export default MarkerContainer;