let map;
let information;

window.onload = function () {
	map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
  




console.log(btc);

var markers = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'marker.png'
    })
  })
});
map.addLayer(markers);


//this marker is what creates

let venue = btc.venues;

for (let v in venue){
	var marker = document.createElement("div");
  marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([venue[v].lon, venue[v].lat])));
	
	
  
 
  
  
//  marker.onclick =  function() {markerClick(venue[v].id); };
  
   markers.getSource().addFeature(marker);
   marker.id = venue[v].id;
   markers.id = venue[v].id;
  const status = document.getElementById('status');

  
	
}
  
  information = document.getElementById("coordinate-info");
  
map.on('click', function(e){
  try{
    map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
         console.log(feature); 
         information.innerHTML = venue[feature.id].name;
      information.innerHTML += "<br> Longitude: " + venue[feature.id].lon + "<br> Latitude: " + venue[feature.id].lat;
      
    })
    
  }catch{
    
    console.log("error found");
    information.innerHTML = "No information avaliable for this site, or you are clicking on multiple markers";
  }
    
  })  
  
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}


  
};

function markerClick(id){
	console.log("this id is " + id);
}

