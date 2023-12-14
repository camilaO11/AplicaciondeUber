import { Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.page.html',
  styleUrls: ['./ruta.page.scss'],
})
export class RutaPage {
  public map: mapboxgl.Map | undefined;
  public style = 'mapbox://styles/mapbox/streets-v11';
  public puntoInicio: string = '';
  public puntoFinal: string = '';

  constructor() {
    mapboxgl.accessToken = environment.MAPBOX_KEY;
  }

  ngOnInit() {
    this.buildMap();
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
      mapboxgl: mapboxgl,
      marker: false, // Desactiva el marcador para evitar errores de compilación
    });

    this.map.addControl(geocoder);

    geocoder.on('result', (event: any) => {
      const result = event.result;
      const placeName = result.place_name;

      if (this.puntoInicio === '') {
        this.puntoInicio = placeName;
      } else if (this.puntoFinal === '') {
        this.puntoFinal = placeName;
      }
    });

    this.map.resize();
  }

  guardarRuta() {
    if (this.puntoInicio && this.puntoFinal) {
      const ruta = {
        puntoInicio: this.puntoInicio,
        puntoFinal: this.puntoFinal,
      };

      localStorage.setItem('rutaGuardada', JSON.stringify(ruta));

      this.puntoInicio = '';
      this.puntoFinal = '';

      alert('Ruta guardada correctamente en el localStorage');
    } else {
      alert('Por favor, selecciona el punto de inicio y el punto final en el mapa.');
    }
  }
}
