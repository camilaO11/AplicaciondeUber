import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  arreglo= [];
  arr=new Array();
  usuario:string='';
  constructor(private router :Router) { }

  vista(){
    this.router.navigate(['/tab/vista']);
  }


  ngOnInit() {
    var data = localStorage.getItem('usuario');
    console.log(data);
    if(data!=null){
      console.log("no es nulo");
      this.arreglo=JSON.parse(data);
      console.log(this.arreglo);
      this.arr.push(this.arreglo);
      this.arr.forEach(element => {
        console.log(element.usuario);
        this.usuario=element.usuario;
      });
      
    }

  }


}
