import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserserviceService } from 'src/app/Services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  infouser:Iuser={} as Iuser

  constructor(private http:UserserviceService,private router:Router){

  }

  getuser() {
    this.http.login(this.infouser).subscribe(
      (response:any) => {
        console.log(response);
  
       
        this.http.saveToken(response.token,response.id,response.fullname);
    
  
      
        this.router.navigate(['/tasklist']);
  
       
        console.log(this.http.getToken());
      },
      (error) => {
        console.error('Error during login:', error);
        Swal.fire(
          'Error!', 
          'There was a problem in your UserName or Password.', 
          'error' 
        );
       
      }
    );
  }
  


}
