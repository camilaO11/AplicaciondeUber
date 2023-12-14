import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
//////libreria
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Conductor } from 'src/app/interface/conductor';
import { Vehiculo } from 'src/app/interface/vehiculo';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage {
  password: string = '';
  miConductor: Conductor = {
    nombre: '',
    apellido: '',
    email: '',
    celular:  0,
    uid: '',
    estado: true,
    vehiculo:{
      anio:0,
      asientos:0,
      marca:'',
      placa:''
    }
  };

  constructor(private afAuth: AngularFireAuth, private router: Router, private servFire: ServicioFirebaseService) {}

  async register() {
    try {
      // Registrar al usuario
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.miConductor.email, this.password);
      const user = userCredential.user;

      // Guardar los datos del usuario en Firebase Realtime Database
      if (user) {
        const userId = user.uid;
        this.miConductor.uid = userId; // Utiliza el UID del usuario como rut
        // Puedes agregar otros datos al objeto miUsuario según tus necesidades

        // Luego, puedes almacenar miUsuario en la base de datos
        this.servFire.grabarConductor(this.miConductor)
          .then(() => {
            console.log('Usuario registrado y datos guardados correctamente');
            // Puedes realizar redirecciones u otras acciones aquí
            this.router.navigate(['/tabs/home']); // Redirige al usuario a la página principal
          })
          .catch((error) => {
            console.error('Error al guardar los datos del usuario:', error);
          });
      } else {
        console.error('Error al registrar el usuario: usuario nulo');
      }
    } catch (error) {
      // Maneja errores, como correos electrónicos ya registrados o problemas de red
      console.error(error);
    }
  }
}
