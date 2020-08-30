
// --------------------------------Places where I lived-------------------------------------------------------------

const myMap = L.map("mapid1", {
    center: [15, -40],
    zoom: 2
  });

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);

// Read the data from CSV
d3.csv('../Data/places_lived.csv').then(function(data){
    // console.log(data);

    var myMarker = L.AwesomeMarkers.icon({
        icon: 'home',
        prefix: 'fa',
        markerColor: 'cadetblue'
      });

    data.forEach(d=>{
        L.marker([d.Lat, d.Lon],{icon:myMarker})
        .bindPopup("<h6>"+d.City+"</h6>" + d.Country+"<hr>" + "Years: "+d.Years)
        .addTo(myMap);
    }
        )
})

// --------------------------------Places I visited for work-------------------------------------------------------------

const myMap2 = L.map("mapid2", {
    center: [15, -40],
    zoom: 1
  });

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap2);

// Read the data from CSV
d3.csv('../Data/places_work.csv').then(function(data){
    // console.log(data);

    var myMarker = L.AwesomeMarkers.icon({
        icon: 'briefcase',
        prefix: 'fa',
        markerColor: 'green'
      });

    data.forEach(d=>{
        L.marker([d.Lat, d.Lon],{icon:myMarker})
        .bindPopup("<h6>"+d.City+"</h6>" + d.Country+"<hr>" + "Clients: "+d.Clients)
        .addTo(myMap2);
    }
        )
})

// --------------------------------Places I visited for tourism-------------------------------------------------------------

const myMap3 = L.map("mapid3", {
    center: [15, -40],
    zoom: 1
  });

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap3);

// Read the data from CSV
d3.csv('../Data/places_tourism.csv').then(function(data){
    // console.log(data);

    var myMarker = L.AwesomeMarkers.icon({
        icon: 'glass',
        prefix: 'fa',
        markerColor: 'purple'
      });

    data.forEach(d=>{
        L.marker([d.Lat, d.Lon],{icon:myMarker})
        .bindPopup("<h6>"+d.City+"</h6>" + d.Country)
        .addTo(myMap3);
    }
        )
})