import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskRoutingModule } from './task-routing.module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [TaskDetailsComponent,
    TaskAddComponent,
    TaskListComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],
  providers:[]
})
export class TaskModule { }
