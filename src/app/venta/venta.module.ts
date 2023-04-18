import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { HistorialventaComponent } from './historialventa/historialventa.component';
import { NuevaventaComponent } from './nuevaventa/nuevaventa.component';


@NgModule({
  declarations: [
    ListadoComponent,
    HistorialventaComponent,
    NuevaventaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
