import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Demande } from '../modeles/demande';
import { Resultat } from '../modeles/resultat';
import { AppConfig } from '../parametres/app-config';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  demande_URL = AppConfig.apiUrl+'demandes/list_demande';
    token = '';//JSON.parse(localStorage.getItem('currentUser')).token;
    headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${this.token}`
    });

  all_elements$ = new BehaviorSubject<Resultat<Demande>>(null);
  one_element$ = new BehaviorSubject<Resultat<Demande>>(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<Resultat<Demande>>{
    return this.http.get<Resultat<Demande>>(this.demande_URL)
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Demande>>('getAll'))
    );
  }

  get(id: number): Observable<Resultat<Demande>>{
    return this.http.get<Resultat<Demande>>(this.demande_URL+'/'+id)
    .pipe(
      tap(res => {
        this.one_element$.next(res);
      }),
      catchError(this.handleError<Resultat<Demande>>('get'))
    );
  }

  
  create(data: Demande): Observable<Resultat<Demande>>{
    return this.http.post<Resultat<Demande>>(this.demande_URL, data,{headers:this.headers})
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Demande>>('create'))
    );
  }

  update(data: Demande): Observable<Resultat<Demande>>{
    return this.http.put<Resultat<Demande>>(this.demande_URL, data,{headers:this.headers})
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Demande>>('update'))
    );
  }

  delete(id: number): Observable<Resultat<Demande>>{
    return this.http.delete<Resultat<Demande>>(this.demande_URL+'/'+ id,{headers:this.headers})
    .pipe(
      tap(res => {
        this.all_elements$.next(res);
      }),
      catchError(this.handleError<Resultat<Demande>>('delete'))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
