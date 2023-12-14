import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  historialItems: any[] = [];

  constructor() {
    // Aquí puedes cargar tus datos del historial, por ejemplo, desde un servicio o una API
    this.historialItems = [
      { descripcion: 'Viaje 1',destino: 'Tobalaba', fecha: '2023-09-22' },
      { descripcion: 'Viaje 2',destino: 'Casas Viejas', fecha: '2023-09-25' },
      // Agrega más elementos según tu necesidad
    ];
  }


  ngOnInit() {
  }

}





