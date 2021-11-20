import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { User } from '../modeles/user';
import { AppConfig } from '../parametres/app-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(mobile: string, password: string) {
    return this.http.post<any>(`${AppConfig.apiUrl}auth/login`, { mobile, password })
      .pipe(tap(value => {
        if (value && value.data.token) {
          localStorage.setItem('USER', JSON.stringify(value.data.user));
          localStorage.setItem('TOKEN_KEY', JSON.stringify(value.data.token));
          this.currentUserSubject.next(value);
        }
        return value;
    }));
  }

  register(user:any){
    return this.http.post<any>(`${AppConfig.apiUrl}auth/register`,user)
    .pipe(tap(res=>{
      this.currentUserSubject.next(res);
    }));
  }

  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}
