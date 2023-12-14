import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verbusqueda',
  templateUrl: './verbusqueda.page.html',
  styleUrls: ['./verbusqueda.page.scss'],
})
export class VerbusquedaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  chat(){

    this.router.navigate(['tab/chat']);
  };
}
