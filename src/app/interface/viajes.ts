import { Conductor } from "./conductor";
import { Usuario } from "./usuario";

export interface Viajes {
    id:number;
    usuario:Usuario;
    conductor:Conductor;
    costo:number;
    estado:boolean;
    hora_salida:firebase.default.firestore.Timestamp;
    hora_llegada:firebase.default.firestore.Timestamp;
}
