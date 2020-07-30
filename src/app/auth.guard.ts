import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private auth: AngularFireAuth){}
  canActivate():boolean{
    
    if(this.auth.auth.currentUser == null){
      
      this.router.navigate([''])
      return false;
    }
    else{
      return true
    }
  }
  
}
