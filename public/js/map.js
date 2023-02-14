// Gets Neighborhood Buttons by ID (for "book marked" zoom extents)
// THESE BUTTONS ARE CURRENTLY BROKEN
const eav = document.getElementById('eav');
const midtown = document.getElementById('midtown');
const mozleyPark = document.getElementById('mozleyPark');

// Map Rendering
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




