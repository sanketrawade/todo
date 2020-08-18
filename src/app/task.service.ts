import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';

@Injectable({providedIn: 'root'})
export class TaskService{

  public baseUrl = 'http://localhost:3000/task';
  public getTaskListApiUrl = '/api/gttsk';
  public addTaskApiUrl = '/api/adtsk';
  public getTaskByIdApiUrl = '/api/gttkbtid';
  public delTaskApiUrl = '/api/deltsk';
  public changeStatusApiUrl = '/api/chngstus';
  constructor(private http: HttpClient){
  }

  // tslint:disable-next-line: typedef
  GetTaskList(){
    return this.http.get(this.baseUrl + this.getTaskListApiUrl);
  }

  // tslint:disable-next-line: typedef
  GetTaskById(){
    return this.http.get(this.baseUrl + this.getTaskByIdApiUrl);
  }

  // tslint:disable-next-line: typedef
  AddTask(task: Task){
    return this.http.post(this.baseUrl + this.addTaskApiUrl , task);
  }

  ChangeStatus(task: Task){
    return this.http.post(this.baseUrl + this.changeStatusApiUrl , task);
  }

  // tslint:disable-next-line: typedef
  DeleteTask(id){
    const idViewModel = {
      Id: id
    };
    return this.http.post(this.baseUrl + this.delTaskApiUrl, idViewModel);
  }



}
