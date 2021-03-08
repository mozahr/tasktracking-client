import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = environment.baseUrl + 'Api/task/';
  constructor(private http: HttpClient) { }

  getTask(){
    return  this.http.get(this.baseUrl + 'getTasks');
  }
  addTask(task){
    return this.http.post(this.baseUrl + 'insertTasks',task);
  }
}
