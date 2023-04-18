import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'pipes', pathMatch: 'full'}, // Para el login sin ruta en path, pero con pipes podría enviar a un index por ejemplo
  {path: 'pipes', component: PipesComponent },
  {path: 'estructural', component: EstructuralComponent },
  {path: 'compra',
   component: ListadoComponent,
    canActivate: [AuthGuard],
    children:[
    {path: 'nueva', component: NuevaCompraComponent},
    {path: 'historial', component: HistorialCompraComponent}
  ]},
  {
    path: 'venta',
    loadChildren: () => import('./venta/venta.module').then((m) => m.VentaModule) ,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
