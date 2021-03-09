import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITask } from 'src/app/shared/interfaces/task.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = environment.baseUrl + 'api/task/';

  constructor(private http: HttpClient) { }

  getTask(){

    return  this.http.get(this.baseUrl + 'get').pipe(catchError(this.handleError));
  }
  addTask(task){

    return this.http.request('POST',this.baseUrl + 'insert',{responseType:'json', body:task});
  }
  editTask(task){

    return this.http.request('POST',this.baseUrl + 'edit',{responseType:'json', body:task});
  }
  removeTask(task){

    return this.http.get(this.baseUrl + 'delete/' + task.id);
  }

  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
