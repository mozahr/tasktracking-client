import { ThrowStmt } from '@angular/compiler';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private _taskSvc: TaskService,
              private _router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),
      assignee_Name: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    if (this.form.valid) {
      var task:ITask = {
        "Details": this.form.value.details,
        "Title": this.form.value.title,
        "Assignee_Name": this.form.value.assignee_Name
      };
      this._taskSvc.addTask(task).subscribe(c => {
        
        this._router.navigate(["/"]);
      });
    }
  }
  get title() { return this.form.get('title'); }

  get details() { return this.form.get('details'); }
}
