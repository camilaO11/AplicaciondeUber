import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  chat(){

    this.router.navigate(['tab/chat']);
  };
}
