import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  user(){
    this.router.navigate(['tabs/user']);
  }


}
