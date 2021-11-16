import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesDemandesComponent } from './mes-demandes.component';

const routes: Routes = [
  {path:'', component: MesDemandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDemandesRoutingModule { }
