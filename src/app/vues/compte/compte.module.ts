import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteRoutingModule } from './compte-routing.module';
import { CompteComponent } from './compte.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CompteComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CompteRoutingModule
  ]
})
export class CompteModule { }
