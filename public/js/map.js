// Gets Neighborhood Buttons by ID (for "book marked" zoom extents)
// THESE BUTTONS ARE CURRENTLY BROKEN
const eav = document.getElementById('eav');
const midtown = document.getElementById('midtown');
const mozleyPark = document.getElementById('mozleyPark');

let map
if (map) map.remove();
map = L.map( 'map', {
  center: [33.748783, -84.388168],
  minZoom: 2,
  zoom: 11
});

L.tileLayer( 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['mt0','mt1','mt2','mt3']
}).addTo( map );

// Broken code for rendering default and neighborhood maps
/*let map
let googleStreets
const renderMap = (lat, lon, zoom = 5.5)=>{
  if (map) map.remove();
  map = L.map( 'map').setView([lat, lon],zoom);

  googleStreets = L.tileLayer( 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['mt0','mt1','mt2','mt3'],
      maxZoom: 20
  }).addTo( map );
}
const init = async () => {
  try {
  let initialMapData = await fetch('/api/maps/default');
  let { lattitude, longitude } =
    await initialMapData.json();

  renderMap(lattitude, longitude);
  } catch (err) {
    console.error(err);
    throw new Error("Init Error");
  }
};*/


//THIS FUNCTION SHOULD WORK AFTER FOOD TRUCK SEED FILE IS CREATED:
// Add Food Truck Markers to the map by looping over the array
// call Leaflet function to create markers
/*for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng] )
      .bindPopup( '<a href="' + markers[i].url + '" target="_blank" rel="noopener">' + markers[i].name + '</a>' )
      .addTo( map );
}*/

