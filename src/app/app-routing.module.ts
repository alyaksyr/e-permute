import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:() => import('./vues/layout/layout.module').then(m => m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: false,
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
