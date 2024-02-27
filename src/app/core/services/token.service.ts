import { Injectable } from '@angular/core';

const  TOKEN_KEY = 'AuthToken'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

constructor() { }

setToken(token: string):void{
localStorage.setItem(TOKEN_KEY, token);
}

getToken():string | null{
  return localStorage.getItem(TOKEN_KEY);
}

logOuth():void{
  localStorage.removeItem(TOKEN_KEY);
}




}
