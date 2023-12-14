import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userCorreo: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user && user.email) {
        this.userCorreo = user.email;
      } else {
        this.userCorreo = 'Usuario no autenticado'; // O un valor predeterminado si lo prefieres
      }
    });
  }

  pagos() {
    this.router.navigate(['tab/pagos']);
  }

  actualizar() {
    this.router.navigate(['tab/actualizar']);
  }

  historial() {
    this.router.navigate(['tab/historial']);
  }

  logout() {
    this.afAuth.signOut()
      .then(() => {
        // Cierre de sesión exitoso, redirige a la página de inicio de sesión o a donde desees
        this.router.navigate(['login']);
      })
      .catch((error) => {
        // Maneja errores, si los hay
        console.error(error);
      });
  }
}