import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,children:[
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'home',loadChildren:() => import('./accueil/accueil.module').then(m => m.AccueilModule)},
      {path:'demandes',loadChildren:() => import('./demandes/demandes.module').then(m => m.DemandesModule)},
      {path:'faq',loadChildren:() => import('./faq/faq.module').then(m => m.FaqModule)},
      {path:'auth',loadChildren:() => import('../vues/auth/auth.module').then(m => m.AuthModule)},
      {path:'compte',canActivate:[AuthGuardService],loadChildren:() => import('../vues/compte/compte.module').then(m => m.CompteModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
