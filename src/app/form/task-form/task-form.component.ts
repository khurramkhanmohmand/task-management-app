import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();

  newTask: Task = { id: 0, title: '', completed: 2 };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.title.trim()) {
      this.taskService.addTask({ ...this.newTask, id: Date.now() });
      this.newTask.title = '';
    }
  }
}
