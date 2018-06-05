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

  constructor(private data: ActorService) {

  }

  ngOnInit() {
    this.data.mensajeActual2.subscribe(mensaje => this.arregloActores = mensaje);
    // this.arregloTabla = this.arregloActores;
    this.createForm();
  }

  private createForm() {
    this.formDetalle = new FormGroup({
      identificadorPelicula: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      anioLanzamiento: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      actoresPrincipales: new FormControl('', Validators.required),
      sinopsis: new FormControl('', Validators.required),
      actorId: new FormControl('', Validators.required)
    });
  }

  agregarDatos(Data) {

    this.arregloActores.push(
      {
        'nombres': this.arregloActores[0].nombres,
        'apellidos': this.arregloActores[0].apellidos,
        'fechaNacimeinto': this.arregloActores[0].fechaNacimeinto,
        'numeroPeliculas': this.arregloActores[0].numeroPeliculas,
        'retirado': this.arregloActores[0].retirado,
        'peliculas': this.arregloActores[0].peliculas,
      });

    this.arregloActores[0].peliculas.push(
      {
        'identificadorPelicula': Data.value.identificadorPelicula,
        'nombre': Data.value.nombre,
        'anioLanzamiento': Data.value.anioLanzamiento,
        'rating': Data.value.rating,
        'actoresPrincipales': Data.value.actoresPrincipales,
        'sinopsis': Data.value.sinopsis,
        'actorId': Data.value.actorId,
      });

    this.arregloActores.splice(0, 1);
    this.arregloTabla.push(this.arregloActores);
    this.enviarDatos();
    this.resetForm();
  }

  enviarDatos() {
    console.log(this.arregloTabla);
    this.data.cambiarMensaje3(this.arregloTabla);
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
