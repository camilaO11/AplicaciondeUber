import { Injectable } from '@angular/core';
///////librerias
import{ AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
//interface
import { Geolocalizacion } from '../interface/geolocalizacion';
import { Receta } from '../interface/receta';
import { Usuario } from '../interface/usuario';
import { Conductor } from '../interface/conductor';
import { Viajes } from '../interface/viajes';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  private recetaColeccion : AngularFirestoreCollection<Receta>;
  private usuarioColeccion : AngularFirestoreCollection<Usuario>;
  private conductorColeccion : AngularFirestoreCollection<Conductor>;
  

  constructor(private afs: AngularFirestore) {
    this.recetaColeccion = afs.collection<Receta>('receta'),
    this.usuarioColeccion = afs.collection<Usuario>('usuario'),
    this.conductorColeccion = afs.collection<Conductor>('conductor')
   }
  getReceta(){
    this.afs.collection('receta').valueChanges().subscribe(
      (res)=>{
        console.log("ok");
        console.log(res);
      }
    )
  } 

grabarReceta(receta : Receta){
  return this.recetaColeccion.add(receta)
}
grabarUsuario(usuario : Usuario){
  return this.usuarioColeccion.add(usuario)
}

grabarConductor(conductor : Conductor){
  return this.conductorColeccion.add(conductor)
}



eliminarReceta(id : string){
  return this.recetaColeccion.doc(id).delete();
  
}



}


