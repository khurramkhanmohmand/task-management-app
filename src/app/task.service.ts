import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  public tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  markTaskAsCompleted(taskId: number, event: any) {
    console.log(event);
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = event.target.checked ? 1 : 2;
      this.tasksSubject.next(this.tasks);
    }
  }
}
