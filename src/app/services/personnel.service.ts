import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Personnel } from '../modeles/personnel';
import { Resultat } from '../modeles/resultat';
import { AppConfig } from '../parametres/app-config';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  personnel_URL = AppConfig.apiUrl+'personnels';
    token = JSON.stringify(localStorage.getItem('TOKEN_KEY'));
    headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${this.token}`
    });

  all_elements$ = new BehaviorSubject<Resultat<Personnel>>(null);
  one_element$ = new BehaviorSubject<Resultat<Personnel>>(null);

  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<Resultat<Personnel>>{
    return this.http.get<Resultat<Personnel>>(this.personnel_URL,{headers:this.headers})
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Personnel>>('getAll'))
    );
  }

  get(id: number): Observable<Resultat<Personnel>>{
    return this.http.get<Resultat<Personnel>>(this.personnel_URL+'/'+id,{headers:this.headers})
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<Resultat<Personnel>>('get'))
    );
  }

  
  create(data: Personnel): Observable<Resultat<Personnel>>{
    return this.http.post<Resultat<Personnel>>(this.personnel_URL, data,{headers:this.headers})
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Personnel>>('create'))
    );
  }

  update(data: Personnel): Observable<Resultat<Personnel>>{
    return this.http.put<Resultat<Personnel>>(this.personnel_URL, data,{headers:this.headers})
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Personnel>>('update'))
    );
  }

  delete(id: number): Observable<Resultat<Personnel>>{
    return this.http.delete<Resultat<Personnel>>(this.personnel_URL+'/'+ id,{headers:this.headers})
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Personnel>>('delete'))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
