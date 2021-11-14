import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ComposantsModule } from '../composants/composants.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ComposantsModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
