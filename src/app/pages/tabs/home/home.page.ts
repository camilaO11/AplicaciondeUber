import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../../../shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  horaInicio: string = ""; 

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    
    this.horaInicio = this.sharedDataService.getHoraInicio();
  }

  viaje() {
    this.router.navigate(['/tabs/viaje']);
  }
}
