import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor/actor.service';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {

  datosTabla = [];
  constructor(private data: ActorService) { }

  ngOnInit() {
    this.data.mensajeActual3.subscribe(mensaje => this.datosTabla = mensaje);
  }

  cambiarBolean(estado) {

    if (estado === true) {
      return 'Si';
    } else {
      return 'No';
    }

  }
}
