import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [

  {
    path: "",
    component: TaskListComponent
  },
  {
    path: "add",
    component: TaskAddComponent
  },
  {
    path: "details",
    component: TaskDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
