import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:'./vues/layout/layout.module#LayoutModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:false,
    scrollPositionRestoration:'top',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
