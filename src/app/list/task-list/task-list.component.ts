import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filter: number = 0;
  public tasksSubscription!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksSubscription = this.taskService.tasksSubject.subscribe(
      (tasks) => {
        this.tasks = tasks.filter(
          (task) => task.completed === this.filter || this.filter === 0
        );
      }
    );
  }

  markTaskAsCompleted(taskId: number, event: any) {
    this.taskService.markTaskAsCompleted(taskId, event);
  }

  setFilter(filter: number) {
    this.filter = filter;
    this.getTasks();
  }
}
