import {Component, OnInit} from '@angular/core';
import {ActorService} from '../actor/actor.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  mensaje = [];
  arregloDatos = [];
  constructor(private data: ActorService) {}



  ngOnInit() {
    this.data.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
  }

  mostrarInformacion(event, formData) {
    console.log(event);
    console.log(formData.value);

  }

  agregarDatos(formData) {
    this.arregloDatos.push(
      {
        'nombres': formData.value.nombres,
        'apellidos': formData.value.apellidos,
        'fechaNacimiento': formData.value.fechaNacimiento,
        'numeroPeliculas': formData.value.numeroPeliculas,
        'retirado': formData.value.retirado,
        'peliculas': []
      });

    this.mandarDatos();

    this.resetForm();

    console.log(this.arregloDatos);
  }

  mandarDatos() {

    this.data.cambiarMensaje(this.arregloDatos);
  }

  resetForm() {

    const resetForm = <HTMLFormElement>document.getElementById('Cabecera');
    resetForm.reset();
  }
}
