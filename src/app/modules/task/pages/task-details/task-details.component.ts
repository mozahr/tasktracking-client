import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from 'src/app/core/services/task.service';
import { ITask } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, OnChanges {
  @Input() public task;
  @Output() isUpdated = new EventEmitter<boolean>();
  isSaveSucessful;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _taskSvc: TaskService) { 

    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(this.task.title, [Validators.required]),
      details: new FormControl(this.task.details, [Validators.required]),
      assignee_Name: new FormControl(this.task.assignee_Name, [Validators.required])
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {

   if (propName === 'task') {

    this.form = this.formBuilder.group({
      title: new FormControl(this.task.title, [Validators.required]),
      details: new FormControl(this.task.details, [Validators.required]),
      assignee_Name: new FormControl(this.task.assignee_Name, [Validators.required])
    });

   }
  }
}
  onSubmit() {
    if (this.form.valid) {
      var task: ITask = {
        "Id":this.task.id,
        "Details": this.form.value.details,
        "Title": this.form.value.title,
        "Assignee_Name": this.form.value.assignee_Name
      };
      this._taskSvc.editTask(task).subscribe(c => {
        this.isSaveSucessful = true;
      this.isUpdated.emit(true);
      });
    }
  }
  deleteTask(){
    this._taskSvc.removeTask(this.task).subscribe(c => {

      this.isUpdated.emit(true);
      
    });
  }

}
