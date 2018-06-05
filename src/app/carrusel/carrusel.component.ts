import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor/actor.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  arregloCarrusel = [];

  constructor(private data: ActorService) { }

  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.arregloCarrusel = mensaje);
  }

}
