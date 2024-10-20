import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Itask } from 'src/app/Models/itask';
import { TaskprocessService } from 'src/app/Services/taskprocess.service';
import { UserserviceService } from 'src/app/Services/userservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  newtask:Itask={} as Itask;
   Tid:any;
   Data:any;
   Uid:any;

  constructor(private httpclient:TaskprocessService,fb:FormBuilder,private active: ActivatedRoute,private router:Router ,private httpuser:UserserviceService){
    

  }
  ngOnInit(): void {
    this.Tid = this.active.snapshot.paramMap.get('id');
    console.log('Task ID:', this.Tid);
    this.Uid=this.httpuser.getUserId()

    if(this.Tid !=null){
      
    this.getDetails(this.Tid,this.Uid)
    }
    
  }
  

  warningMessage: string = '';

  
  checkDate(inputDate: string): void {
    const selectedDate = new Date(inputDate);
    const today = new Date();
    
    if (selectedDate < today) {
      this.warningMessage = 'The selected date is in the past!';
    } else {
      this.warningMessage = '';
    }
  }

  addtask() {
    
  
     if(this.newtask.id != 0 && this.newtask.id !=null)
     {
      this.httpclient.updatetask(this.newtask).subscribe(
        (response) => {
          console.log('Task updated successfully:', response);
          
        
          Swal.fire({
            icon: 'success',
            title: 'Task Updated',
            text: 'The task has been updated successfully!',
            confirmButtonText: 'OK'
          });

          this.router.navigate(['tasklist/details/',this.Tid])
        },
        (error) => {
          console.error('Error adding task:', error);
          
         
          Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: 'There was an error updating the task. Please try again later.',
            confirmButtonText: 'OK'
          });
        }
      );
      
      
     }else{
    this.newtask.id = 0;
    this.newtask.userID=this.Uid
  
    console.log(this.newtask);
    this.httpclient.addnewtask(this.newtask).subscribe(
      (response) => {
        console.log('Task added successfully:', response);
        Swal.fire({
          icon: 'success',
          title: 'Task  Added',
          text: 'The task has been updated successfully!',
          confirmButtonText: 'OK'
        });
        this.router.navigate(['tasklist'])
        
      },
      (error) => {
        console.error('Error adding task:', error);
        
      }
    );
  }
  }


  getDetails(id: any,uid:any): void {
    
    this.httpclient.getTaskDetails(id,uid).subscribe(
      (data) => {
        this.Data = data; 
        console.log('Task Details:', this.Data);
        this.newtask.id = Number(this.Data.id);
        this.newtask.description = String(this.Data.description); 
        this.newtask.titel=String(this.Data.titel)
        this.newtask.dueDate = new Date(this.Data.dueDate);
        this.newtask.userID =String(this.Data.userID)
        this.newtask.isCompleted=Boolean(this.Data.isCompleted)
      },
      (error) => {
        console.error('Error fetching task details:', error); 
      }
    );

    

  }
  

}
