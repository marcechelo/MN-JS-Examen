import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class ActorService {

  arregloActores = [];
  contador = 0;

  private fuenteMensaje = new BehaviorSubject<any>([]);

  private fuenteMensaje2 = new BehaviorSubject<any>([]);

  private fuenteMensaje3 = new BehaviorSubject<any>([]);

  private arreglo = new BehaviorSubject<any>([]);

  mensajeActual = this.fuenteMensaje.asObservable();
  mensajeActual2 = this.fuenteMensaje2.asObservable();
  mensajeActual3 = this.fuenteMensaje3.asObservable();


  constructor() { }


  cambiarMensaje(mensaje) {
    this.fuenteMensaje.next(mensaje);
    this.arregloActores[this.contador] = mensaje[this.contador];
    this.contador ++;
  }

  cambiarMensaje2(mensaje) {
    this.fuenteMensaje2.next(mensaje);
  }

  cambiarMensaje3(mensaje) {
    this.fuenteMensaje3.next(mensaje);
    this.arregloActores[mensaje[0][0].id].peliculas = mensaje[0][0].peliculas;
    // console.log(this.arregloActores);
  }

  cambiarMensaje33(mensaje) {
    this.fuenteMensaje3.next(mensaje);
  }

  cambiarArreglo(mensaje) {
    this.arreglo.next(mensaje);
  }

  getArreglo() {
    return this.arregloActores;
  }

}
