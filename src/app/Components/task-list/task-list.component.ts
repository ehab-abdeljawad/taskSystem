import { Component, OnInit } from '@angular/core';
import { TaskprocessService } from 'src/app/Services/taskprocess.service';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  Data:any[]=[]
  userid:any;


  constructor(private gettasks:TaskprocessService ,private http:UserserviceService){
   
  }
  ngOnInit(): void {
    this.userid=this.http.getUserId()
    console.log(this.userid)
   this.getall(this.userid)

  }

  getall(id:any){
    this.gettasks.getallTasks(id).subscribe((d)=>this.Data = d)
    console.log(this.Data)
  }

}
