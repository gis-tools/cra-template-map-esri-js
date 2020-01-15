import React, { Component } from 'react';
import { loadModules, setDefaultOptions } from 'esri-loader';
import { esriVersion } from "./config";

import './App.scss';

// configure esri-loader to use version 3.31 from the ArcGIS CDN
// NOTE: make sure this is called once before any calls to loadModules()
setDefaultOptions({
  version: esriVersion,
  css: true,
});

export default class App extends Component {
  componentDidMount = () => {
    loadModules(['esri/Map', 'esri/views/MapView'])
      .then(([Map, MapView]) => {
        const map = new Map({
          basemap: 'gray-vector',
        });

        // eslint-disable-next-line no-unused-vars
        const mapView = new MapView({
          map: map,
          container: 'mapContainer',
          basemap: 'gray-vector',
          center: [-100, 30],
          zoom: 5,
        });

      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>GIS Tools - ESRI App</h1>
        </header>
        <main id='mapContainer' />
      </div>
    );
  }
}
