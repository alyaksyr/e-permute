import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { SiteMiniHeaderComponent } from './site-mini-header/site-mini-header.component';
import { SiteNewsletterComponent } from './site-newsletter/site-newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteMiniHeaderComponent,
    SiteNewsletterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteMiniHeaderComponent,
    SiteNewsletterComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ComposantsModule { }
