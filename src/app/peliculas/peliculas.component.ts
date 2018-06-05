import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor/actor.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  arregloPeliculas = [];
  arregloTabla = [];
  checked = false;

  constructor(private data: ActorService) {

  }

  ngOnInit() {
    this.data.mensajeActual2.subscribe(mensaje => this.arregloPeliculas = mensaje);
    this.arregloTabla = this.arregloPeliculas;
  }

  agregarDatos(Data) {

    this.arregloPeliculas.push(
      {
        'nombres': this.arregloPeliculas[0].nombres,
        'apellidos': this.arregloPeliculas[0].apellidos,
        'fechaNacimeinto': this.arregloPeliculas[0].fechaNacimeinto,
        'numeroPeliculas': this.arregloPeliculas[0].numeroPeliculas,
        'retirado': this.arregloPeliculas[0].retirado,

        'peliculas': [{
          'identificadorPelicula': Data.value.identificadorPelicula,
          'nombre': Data.value.nombre,
          'anioLanzamiento': Data.value.anioLanzamiento,
          'rating': Data.value.rating,
          'actoresPrincipales': Data.value.actoresPrincipales,
          'sinopsis': Data.value.sinopsis,
          'actorId': Data.value.actorId,
        }]
      });

    this.arregloPeliculas.splice(0, 1);
    this.arregloTabla.push(this.arregloPeliculas);
    this.enviarDatos();
    this.resetForm();
  }

  enviarDatos() {
    console.log(this.arregloTabla);
    this.data.cambiarMensaje3(this.arregloTabla);
    this.mostrarTablaDetalle();
  }

  mostrarTablaDetalle() {
    const mostrarTabla = <HTMLFormElement>document.getElementById('tablaDetalle');
    mostrarTabla.style.display = 'block';
  }

  resetForm() {
    const resetForm = <HTMLFormElement>document.getElementById('formDetalle');
    resetForm.reset();
  }
}
