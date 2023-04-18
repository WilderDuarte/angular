import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaventaComponent } from './nuevaventa/nuevaventa.component';
import { HistorialventaComponent } from './historialventa/historialventa.component';

const routes: Routes = [
  {path: '', children:[
    {path: '', redirectTo: 'nueva', pathMatch: 'full'},
    {path: 'nueva', component: NuevaventaComponent},
    {path: 'historial', component: HistorialventaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
