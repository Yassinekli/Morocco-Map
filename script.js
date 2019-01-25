
let map = L.map('map').setView([29, -9], 5);

/* L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(mymap); */

// Some Carto's Tiles
/*
    light_all,
    dark_all,
    light_nolabels,
    light_only_labels,
    dark_nolabels,
    dark_only_labels,
    rastertiles/voyager,
    rastertiles/voyager_nolabels,
    rastertiles/voyager_only_labels,
    rastertiles/voyager_labels_under
*/

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    maxZoom: 5
}).addTo(map);