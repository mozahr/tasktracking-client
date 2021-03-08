import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskRoutingModule } from './task-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TaskDetailsComponent,
    TaskAddComponent,
    TaskListComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    RouterModule
  ]
})
export class TaskModule { }
