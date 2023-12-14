import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clave',
  templateUrl: './clave.page.html',
  styleUrls: ['./clave.page.scss'],
})
export class ClavePage implements OnInit {


  constructor(private router :Router) { }

  ngOnInit() {
  }

  menu(){
    this.router.navigate(['tab/menu']);
  }


}
