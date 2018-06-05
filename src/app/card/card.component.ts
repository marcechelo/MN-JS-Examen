import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor/actor.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  tarjeta = [];

  constructor(private data: ActorService) { }

  ngOnInit() {
    this.data.mensajeActual2.subscribe(mensaje => this.tarjeta = mensaje);
  }

}
