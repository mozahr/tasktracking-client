import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/shared/interfaces/task.interface';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[];
  selectedTask: ITask;
  constructor(private _taskSvc: TaskService) {
 
  }

  ngOnInit(): void {
    this.loadData();
  }
  editTask(task) {
    this.selectedTask = task;



  }
  loadData() {
    this._taskSvc.getTask().subscribe((c: ITask[]) => {

      this.tasks = c;
    });
  }
  isUpdated(event) {
    this.selectedTask = null;
    this.loadData();

  }
}
