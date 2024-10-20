import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskprocessService } from 'src/app/Services/taskprocess.service';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  Tid: any; // The ID from the route
  Data: any = {}; // The object to hold task details
  Uid:any;

  constructor(
    private active: ActivatedRoute, 
    private httpclient: TaskprocessService,
    private router: Router,
    private httpuser:UserserviceService
  ) {}

  ngOnInit(): void {
    
    this.Tid = this.active.snapshot.paramMap.get('id');
    console.log('Task ID:', this.Tid);
    this.Uid=this.httpuser.getUserId()
    
    
    this.getDetails(this.Tid,this.Uid);
  }

  getDetails(id: any,Uid:any): void {
    
    this.httpclient.getTaskDetails(id,Uid).subscribe(
      (data) => {
        this.Data = data; 
        console.log('Task Details:', this.Data); 
      },
      (error) => {
        console.error('Error fetching task details:', error); 
      }
    );
  }

  DelateTask(id:any){
    this.httpclient.deletetask(id).subscribe(() => {
      // Success case: Task was deleted
      Swal.fire(
        'Deleted!', // Title of the alert
        'Your task has been deleted.', // Message displayed
        'success' // Icon type (can be 'success', 'error', 'warning', etc.)
      ).then(() => {
        // Redirect to task list after successful deletion
        this.router.navigate(['/tasklist']); // Navigate back to task list page
      });
    
    } ,error => {
      // Error case: There was a problem deleting the task
      Swal.fire(
        'Error!', // Title of the alert
        'There was a problem deleting your task.', // Error message
        'error' // Icon type for the error
      );
    });
    
  }
}
