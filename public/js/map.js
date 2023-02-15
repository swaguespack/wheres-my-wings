// Gets Neighborhood Buttons by ID (for "book marked" zoom extents)
// THESE BUTTONS ARE CURRENTLY BROKEN
const eav = document.getElementById('eav');
const midtown = document.getElementById('midtown');
const mozleyPark = document.getElementById('mozleyPark');

// Array for restaurant markers
markers = [

  {
      "neighborhood":"Midtown", 
      "name": "Goodfellas Pizza & Wings",
      "url": "https://tharealgoodfellas.com/",
      "latitude": 33.786495914101124 ,
      "longitude": -84.39904773922937 

  },

  {
      "neighborhood": "Midtown",
      "name": "Auto Spa Bistro",
      "url": "https://www.autospabistro.com/",
      "latitude": 33.78586149938391, 
      "longitude": -84.39839619220709
  },

  {
      "neighborhood": "Midtown",
      "name": "Tandoori Pizza & Wing Co.",
      "url": "https://tandoori-pizza-and-wing-co.square.site/",
      "latitude": 33.78783836450936, 
      "longitude": -84.38214193169856
  },

  {
      "neighborhood": "Midtown",
      "name": "Wingnuts",
      "url": "https://www.wingnutsgt.com/",
      "latitude": 33.77350850360314, 
      "longitude": -84.40359424123054

  },

  {
      "neighborhood": "Mozley Park",
      "name": "Jamals Buffalo Wings",
      "url": "https://www.facebook.com/Jamalsbuffalowings/",
      "latitude": 33.75069625528228, 
      "longitude": -84.45046046926115
  },

  {
      "neighborhood": "Mozley Park",
      "name": "Touchdown Wings",
      "url": "https://www.touchdownwings.com/",
      "latitude": 33.75179267936498, 
      "longitude": -84.46868803269626
  },

  {
      "neighborhood": "Mozley Park",
      "name": "The Beautiful",
      "url": "http://www.beautifulrestaurant-atlanta.com/",
      "latitude": 33.72231909283965, 
      "longitude": -84.46230334418644
  },

  {
      "neighborhood": "EAV",
      "name":"Gaja Korean Bar",
      "url": "https://www.gajaeav.com/",
      "latitude": 33.740548505540254, 
      "longitude": -84.34583226315087
  },

  {
      "neighborhood": "EAV",
      "name": "The Wing Bar ATL",
      "url": "https://www.thewingbaratl.com/",
      "latitude": 33.74080794240316, 
      "longitude": -84.34569056348266
  },

  {
      "neighborhood": "EAV",
      "name": "The Glenwood",
      "url": "https://theglenwoodatl.com/",
      "latitude": 33.740077687139284,
      "longitude": -84.34624026536429
  }
]

// Render default and neighborhood maps
let map

map = L.map( 'map', {
  center: [33.748783, -84.388168],
  zoom: 11
});

L.tileLayer( 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['mt0','mt1','mt2','mt3']
}).addTo( map );

// Add Restaurant Markers to the map by looping over the markers array
// call Leaflet function to create markers
for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].latitude, markers[i].longitude] )
      .bindPopup( '<a href=" ' + markers[i].url +'" target="_blank" rel="noopener">' + markers[i].name +'</a>')
      .addTo( map );
}


// Code to render default map from database
// Commented out becasue could not figure out how to seee JAWSDB from local seed file
/*const renderMap = (lat, lon, zoom = 11.1)=>{
  if (map) map.remove();
  map = L.map( 'map').setView([lat, lon],zoom);

  googleStreets = L.tileLayer( 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['mt0','mt1','mt2','mt3'],
      
  }).addTo( map );
}
const init = async () => {
  try {
  let initialMapData = await fetch('/api/maps/default');
  let { latitude, longitude } =
    await initialMapData.json();

  renderMap(latitude, longitude);

// Add Restaurant Markers to the map by looping over the markers array
// call Leaflet function to create markers
for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].latitude, markers[i].longitude] )
      .bindPopup( '<a href=" ' + markers[i].url +'" target="_blank" rel="noopener">' + markers[i].name +'</a>')
      .addTo( map );
}

  } catch (err) {
    console.error(err);
    throw new Error("Init Error");
  }


};*/

// Broken code for rendering neighborhood maps on click
/*
const getMap = async (value) => {

  if (!mapData) mapData = await (await fetch(`/api/maps/${value}`)).json();
  let { latitude, longitude } = mapData;

  renderMap(latitude, longitude, 11);
init();
};*/





// Broken code for clicking buttons
// Click functions to render specific map coordinates
/*
eav.addEventListener('click', (e) => {
  e.preventDefault();
  mapData = '';
  let value = eav.innerText;
  getMap(value);
});

midtown.addEventListener('click', (e) => {
  e.preventDefault();
  mapData = '';
  let value = midtown.innerText;
  getMap(value);
});

mozleyPark.addEventListener('click', (e) => {
  e.preventDefault();
  mapData = '';
  let value = mozleyPark.innerText;
  getMap(value);
});*/
