import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itask } from '../Models/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskprocessService {

  url:any="https://localhost:7055/api/Task?userid="

  constructor(private httpclient:HttpClient) { }

  getallTasks(id:string):Observable<any>{
   return this.httpclient.get(this.url+id)
  }
  getTaskDetails(id: any, Uid: any) {
    const apiUrl = `https://localhost:7055/api/Task/task?userid=${Uid}&taskID=${id}`;
    return this.httpclient.get(apiUrl);
  }

  deletetask(id:any){
    return this.httpclient.delete("https://localhost:7055/api/Task?id="+id)

  }

  addnewtask(newtask: Itask): Observable<any> {
    
    return this.httpclient.post<any>("https://localhost:7055/api/Task", newtask);
  }

  updatetask(updatedtask:Itask):Observable<any> {

    return this.httpclient.put<any>("https://localhost:7055/api/Task",updatedtask)

  }
}

