import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path:'', component: LayoutComponent, children:[
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'home',loadChildren:() => import('../accueil/accueil.module').then(m => m.AccueilModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
