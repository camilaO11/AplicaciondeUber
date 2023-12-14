import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-comenzarruta',
  templateUrl: './comenzarruta.page.html',
  styleUrls: ['./comenzarruta.page.scss'],
})
export class ComenzarrutaPage implements OnInit {
  horaInicio: string = "";

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit() {
  }

  home() {
    // Guarda la hora de inicio en el servicio compartido
    this.sharedDataService.setHoraInicio(this.horaInicio);

    // Navegar a la página de inicio
    this.router.navigate(['tabs/home']);
  }
}
