import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Lógica de negocio
    // Return boolean o un UrlTree, lo mejor es siempre un booleano
      const id = localStorage.getItem('id');
      if(id === '1234') {
        console.log("ID CORRECT");
        return true; // Es clave el return, para definir si le es permitido al user ingresar
      }else{
        console.log("ID INCORRECT");
        return false; // Es clave el return, siempre debe terminar así
      }
      // return id === '1234';
  }

}
