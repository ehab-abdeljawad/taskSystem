import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IuserReg } from '../Models/iuser-reg';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url:string="https://localhost:7055/api/Account/login"
  private usernameSubject = new BehaviorSubject<string | null>(null);

  constructor(private http:HttpClient,private router:Router) { }

  login(infouser:Iuser){
    return this.http.post(this.url,infouser)
  }

  saveToken(token:any,userid:any,username:any){
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('userid', userid);
    localStorage.setItem('username', username);
    this.usernameSubject.next(username);

  }

  getToken():any |null{
    return localStorage.getItem('jwtToken');
  }

  

  getUserId():any |null{
    return localStorage.getItem('userid');
  }
 

  getUserName():any |null{
    return localStorage.getItem('username');
  }
  logout():void{
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('userid')
    localStorage.removeItem('username')
    this.usernameSubject.next(null);
    this.router.navigate(['/login']);
  }
  getUsername() {
    return this.usernameSubject.asObservable();
  }

userRegister(infouser:IuserReg):Observable<any>{
  return this.http.post("https://localhost:7055/api/Account", infouser);
}

}
