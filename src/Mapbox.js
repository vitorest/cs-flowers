import React from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

function mapbox() {
  return (
    <div>

    </div>
  )
}

export default mapbox
