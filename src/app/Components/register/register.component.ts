import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IuserReg } from 'src/app/Models/iuser-reg';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  userinformation:IuserReg={} as IuserReg;
 

  constructor(private httpuser:UserserviceService,private router:Router){
   
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.httpuser.userRegister(this.userinformation).subscribe(
        (b)=>{
           
          this.router.navigate(['/login'])

        },(error)=>{

        }
        )
      
        
      
      
    } else {
      console.log('Form not valid');
    }
  }

}
