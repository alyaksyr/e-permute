import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { CompteComponent } from './compte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';


@NgModule({
  declarations: [
    CompteComponent,
    DashboardComponent,
    MesDemandesComponent
  ],
  imports: [
    CommonModule,
    CompteRoutingModule
  ]
})
export class CompteModule { }
