import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Subscription } from 'rxjs';
import { Task } from './Task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  taskList: Task[] = [];
  color = 'warn';
  taskSubscription: Subscription;
  status = null;
  columnsToDisplay = ['userName', 'age'];
  isLoading = false;
  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.GetTaskList();
  }

  GetTaskList() {
    // tslint:disable-next-line: deprecation
    this.isLoading = true;
    this.taskSubscription = this.taskService.GetTaskList().subscribe((response: any) => {
      this.taskList = response.data;
      this.isLoading = false;
    });
  }

  Save(postFormGroup: NgForm) {
    if (postFormGroup.invalid) {
      return;
    }
    const task: Task = {
      _id: null,
      Title: postFormGroup.value.title,
      IsCompleted: false
    };
    postFormGroup.resetForm();
    this.AddTask(task);
  }

  AddTask(task: Task) {
    this.isLoading = true;
    this.taskSubscription = this.taskService.AddTask(task).subscribe((response: any) => {
      this.isLoading = false;
      if (response?.error != null) {
        return;
      }
      else{
        alert('task added.');
        this.GetTaskList();
      }
    });
  }
  ChangeStatus(task: Task){
    this.status = task.IsCompleted === true ? 'complete' : 'incomplete';
    task.IsCompleted = !task.IsCompleted;
    this.taskSubscription = this.taskService.ChangeStatus(task).subscribe((response: any) => {
      if (response?.error != null) {
      }
      else{
      alert('status changed.');
      this.GetTaskList();
      }
    });
  }

  DeleteTask(id) {
    this.taskSubscription = this.taskService.DeleteTask(id).subscribe((response: any) => {
      if (response?.error != null) {
      }
      else{
      alert('task deleted.');
      this.GetTaskList();
      }
    });
  }

}
