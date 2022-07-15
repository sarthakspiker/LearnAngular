import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    //Authentication and Authorization code here
    if(this.authService.isUserAdmin()){
      return true
    }
    else {
      alert('Permission denied for this page')
      return false;
    }

  }
  
}
