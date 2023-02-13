// Gets Neighborhood Buttons by ID
const eav = document.getElementById('eav');
const midtown = document.getElementById('midtown');
const mozleyPark = document.getElementById('mozleyPark');

let mapData;
let openStreets;
let map;


// Renders Map Tile with Leaflet.js Library with Default Zoom
const renderMapData = (lat, lon, zoom = 5.5) => {
  if (map) map.remove();
  map = L.map('map').setView([lat, lon], zoom);

  L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    
    },
  ).addTo(map);
};

// Displays Default Map
const init = async () => {
  try {
  let initialMapData = await fetch('/api/maps/default');
  let { latitude, longitude } =
    await initialMapData.json();

  renderMapData(latitude, longitude);
  } catch (err) {
    console.error(err);
    throw new Error("Init Error");
  }
};




