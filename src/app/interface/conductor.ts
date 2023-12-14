import { Vehiculo } from "./vehiculo";

export interface Conductor {
    uid:string;
    nombre:string;
    apellido:string;
    email:string;
    celular:number;
    estado:boolean;
    vehiculo:Vehiculo;
}
