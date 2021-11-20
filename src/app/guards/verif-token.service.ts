import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
//import * as jwt-jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class VerifTokenService {

  constructor() { }

  checkToken(): boolean{
    const user = this.getUserData();
    const token = this.getTokenKey();
	  if(user && token){
      var jwt:any = jwtDecode(token);
      let dateNow = new Date().getTime();
		  let dateExp = jwt.exp*1000;
		  if(jwt.sub === 'Membre'){
			  if(dateExp > dateNow){
				  return true;
			  }else{
				  this.removeToken();
				  return false;	
			  }
		  }else{
        alert("Vous ne pouvez accéder à cette page !");
			  this.removeToken();
			  return false;
		  }
	  }else{
	    this.removeToken();
	    return false;
	  }
  }

  isAuthenticated(): boolean{
    return this.checkToken();
  }

  removeToken(){
    return localStorage.clear();
  }

  getUserData(): any{
    return JSON.stringify(localStorage.getItem('USER'));
  }

  getUserRole(){
	return JSON.parse(localStorage.getItem('USER')).role;
  }

  getTokenKey(){
    return localStorage.getItem('TOKEN_KEY');
  }
}
