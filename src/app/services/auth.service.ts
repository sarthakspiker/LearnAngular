import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isUserAdmin(){ //here,get isUserAdmin(), while accessing we can use like property
    return true;
  }
}
