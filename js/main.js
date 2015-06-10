var map = L.map('map').setView([51.050, -114.067], 10);

var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var tonerLayer = new L.StamenTileLayer("toner");
var topographicLayer = L.esri.basemapLayer("Topographic");
/* Additional Esri basemaps */
//var grayLayer = L.esri.basemapLayer("Gray");
//var grayLabelsLayer = L.esri.basemapLayer("GrayLabels");
//var imageryLayer = L.esri.basemapLayer("Imagery");
//var imageryLabelsLayer = L.esri.basemapLayer("ImageryLabels");
//var imageryTransportationLayer = L.esri.basemapLayer("ImageryTransportation");
//var oceansLayer = L.esri.basemapLayer("Oceans");
//var oceansLabelLayer = L.esri.basemapLayer("OceansLabels");

/*
L.marker([51.050, -114.067]).addTo(map)
    .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
    .openPopup();
*/

/* Group tiles and labels together for Esri tiles */
//var oceansGroupLayer = L.layerGroup([oceansLayer, oceansLabelLayer]);
//var grayGroupLayer = L.layerGroup([grayLayer, grayLabelsLayer]);
//var imageryGroupLayer = L.layerGroup([imageryLayer, imageryLabelsLayer, imageryTransportationLayer]);

var baseMaps = {
	"OpenStreetMap": osmLayer,
	"Toner": tonerLayer,
	"Topographic": topographicLayer
};

L.control.layers(baseMaps).addTo(map);
