import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {ToastController} from '@ionic/angular';
//////libreria
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Receta } from 'src/app/interface/receta';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  email: string = '';
  password: string = '';
  miReceta: Receta = {
    titulo: '',
    descripcion: '',
    imagen: ''
  };

  constructor(private afAuth: AngularFireAuth, private router: Router, private servFire: ServicioFirebaseService) {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      // Si el inicio de sesión es exitoso, userCredential.user contiene información del usuario
      const user = userCredential.user;
      this.router.navigate(['tab/menu']); // Redirige al usuario a la página principal (home)
    } catch (error) {
      // Maneja errores, como credenciales incorrectas o problemas de red
      console.error(error);
    }
  }

  



  recuperar(){
    this.servFire.getReceta();
  }
            /*
  grabarReceta(){
    let mi_receta: Receta={
      titulo:'Completo',
      descripcion:'rico',
      imagen:'completo.jpg'
    };
    this.servFire.grabarReceta(mi_receta).then(()=>{
      console.log("Grabo");
    }).catch((e)=>{
      console.log(e);
    });
  }        */ 

  grabarReceta() {
    this.servFire.grabarReceta(this.miReceta)
      .then(() => {
        console.log("Receta grabada correctamente");
      })
      .catch((error) => {
        console.error("Error al grabar la receta:", error);
      });
  }




  eliminarReceta(){
    this.servFire.eliminarReceta('DqAM5EVld2XdqtXZwwNf').then(()=>{
      console.log("Elimino",);
    }).catch((e)=>{
      console.error(e);
    })
  }


  reg() {
    // Redirige a la página de registro cuando se hace clic en el botón "REGISTRATE"
    this.router.navigate(['/registro']);
  }
  regi() {
    // Redirige a la página de registro cuando se hace clic en el botón "REGISTRATE"
    this.router.navigate(['/registro-conductor']);
  }

  clave() {
    // Redirige a la página de "clave" cuando se hace clic en el botón "Actualizar clave"
    this.router.navigate(['/clave']);
  }
}


