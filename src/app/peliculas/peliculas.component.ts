import { Component, OnInit } from '@angular/core';
import {ActorService} from '../actor/actor.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  formDetalle: FormGroup;
  arregloActores = [];
  arregloTabla = [];
  arregloPeliculas = [];
  idpelicula = 0;

  constructor(private data: ActorService) {

  }

  ngOnInit() {
    this.data.mensajeActual2.subscribe(mensaje => this.arregloActores = mensaje);
    // this.idpelicula = this.arregloActores[0].id;
    // this.arregloTabla = this.arregloActores;
  }

  agregarDatos(formData) {

    console.log(this.idpelicula = this.arregloActores[0].id);

    this.arregloActores.push(
      {
        'id': this.arregloActores[0].id,
        'nombres': this.arregloActores[0].nombres,
        'apellidos': this.arregloActores[0].apellidos,
        'fechaNacimeinto': this.arregloActores[0].fechaNacimeinto,
        'numeroPeliculas': this.arregloActores[0].numeroPeliculas,
        'retirado': this.arregloActores[0].retirado,
        'peliculas': this.arregloActores[0].peliculas,
      });

    this.arregloActores[0].peliculas.push(
      {
        'identificadorPelicula': formData.value.identificadorPelicula,
        'nombre': formData.value.nombre,
        'anioLanzamiento': formData.value.anioLanzamiento,
        'rating': formData.value.rating,
        'actoresPrincipales': formData.value.actoresPrincipales,
        'sinopsis': formData.value.sinopsis,
        'actorId': formData.value.actorId,
      });

    this.arregloActores.splice(0, 1);
    this.arregloTabla.push(this.arregloActores);
    this.enviarDatos();
    this.resetForm();
  }

  enviarDatos() {
    this.data.cambiarMensaje3(this.arregloTabla);
    console.log(this.arregloTabla);
    this.arregloTabla = [];
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
