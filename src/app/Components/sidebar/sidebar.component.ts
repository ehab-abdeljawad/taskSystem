import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   username:any;
  constructor(private httpuser:UserserviceService,private router:Router){}
   
   

  
  ngOnInit(): void {
    this.getUsername()
  }
  getUsername(): void {
     
    this.httpuser.getUsername().subscribe((name) => {
      this.username = name;
      this.username=this.httpuser.getUserName()
    });
  }
   
  logout(){
    this.httpuser.logout()
   this.username=''
    
  }

}
