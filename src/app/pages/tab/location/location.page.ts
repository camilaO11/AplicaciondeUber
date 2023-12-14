import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  public map: mapboxgl.Map | undefined;
  public style = 'mapbox://styles/mapbox/streets-v11';
  
  constructor(private router: Router) {
    mapboxgl.accessToken = environment.MAPBOX_KEY;
  }

  ngOnInit() {
    if (!this.map) {
      this.buildMap();
    }
  }
  
  verbusqueda() {
    this.router.navigate(['tab/verbusqueda']);
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [-70.5816459, -33.5985866],
      zoom: 9,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });

    geocoder.on('result', (result: mapboxgl.MapboxGeoJSONFeature) => {
      console.log(result); // Maneja aquí el resultado de la búsqueda
    });

    this.map.addControl(geocoder);

    this.map.resize();
  }
}
