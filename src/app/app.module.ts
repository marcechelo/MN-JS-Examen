import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule} from '@angular/material';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import {CheckboxModule} from 'primeng/primeng';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';
import { TablaPeliculasComponent } from './tabla-peliculas/tabla-peliculas.component';
import { CardComponent } from './card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CarruselComponent,
    PeliculasComponent,
    ListaActoresComponent,
    TablaPeliculasComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    CardModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
