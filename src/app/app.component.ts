import { Component } from '@angular/core';
import { UserserviceService } from './Services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskSystem';
  username:any;
  constructor(private http:UserserviceService){
    if(http.getToken())
   this.username=http.getUserName()
  }
}
