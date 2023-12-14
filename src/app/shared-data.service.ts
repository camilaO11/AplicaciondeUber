import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private horaInicio: string = "";

  constructor() { }

  setHoraInicio(hora: string) {
    this.horaInicio = hora;
  }

  getHoraInicio() {
    return this.horaInicio;
  }
}
