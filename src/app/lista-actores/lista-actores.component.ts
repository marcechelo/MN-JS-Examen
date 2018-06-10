import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor/actor.service';

@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css']
})
export class ListaActoresComponent implements OnInit {

  mensaje = [];
  actorCard = [];
  tabla = [];
  peliculas = [];

  constructor(private data: ActorService) {}

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
    this.tabla = this.data.getArreglo();
    // this.data.mensajeArreglo(mensaje => this.tabla = mensaje);
  }

  enviarDatos(indice) {
    this.actorCard = [];
    this.peliculas = [];
    this.actorCard.push(this.mensaje[indice]);
    this.data.cambiarMensaje2(this.actorCard);
    this.peliculas.push(this.actorCard);
    this.peliculas[0][0].peliculas = this.tabla[indice].peliculas
    console.log(this.peliculas); // this.tabla[indice].peliculas saca las peliculas repmplazar con =
    this.mostrarElementos();
    this.data.cambiarMensaje33(this.peliculas);
  }

  actorArreglo(indice) {
    // console.log(this.tabla[indice]);
  }

  mostrarElementos() {

    const mostrarTabla = <HTMLFormElement>document.getElementById('tablaDetalle');
    mostrarTabla.style.display = 'block';

    const mostrarFormDetalle = <HTMLFormElement>document.getElementById('formDetalle');
    mostrarFormDetalle.style.display = 'block';

    const mostrarTarjeta = <HTMLFormElement>document.getElementById('tarjeta');
    mostrarTarjeta.style.display = 'block';


  }

}
