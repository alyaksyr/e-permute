import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VerifTokenService } from './verif-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private verifToken: VerifTokenService, private router: Router) { }

  canActivate():boolean{
    if (this.verifToken.isAuthenticated()) {
      if (this.verifToken.isAuthenticated() === true) {
        return true;
      } else {
        this.router.navigate(['/auth/connexion']);
      }
    } else {
      this.router.navigate(['/auth/connexion']);
    }
  }
}
