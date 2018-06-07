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

  constructor(private data: ActorService) {}

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
  }

  enviarDatos(indice) {
    this.actorCard = [];
    this.actorCard.push(this.mensaje[indice]);
    this.data.cambiarMensaje2(this.actorCard);
    this.mostrarElementos();
  }

  mostrarElementos() {

    const mostrarFormDetalle = <HTMLFormElement>document.getElementById('formDetalle');
    mostrarFormDetalle.style.display = 'block';

    const mostrarTarjeta = <HTMLFormElement>document.getElementById('tarjeta');
    mostrarTarjeta.style.display = 'block';


  }

}
