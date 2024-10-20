import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private httpuser:UserserviceService, private router: Router) {}

  canActivate(): boolean {
    
    const token = this.httpuser.getToken();

    if (token) {
      
      return true;
    } else {
      
      this.router.navigate(['/login']);
      return false;
    }
  }
}
