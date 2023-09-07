import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/task.model';

@Pipe({
  name: 'taskFilter',
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], filter: string): Task[] {
    if (filter === 'All') {
      return tasks;
    } else if (filter === 'Completed') {
      return tasks.filter((task) => task.completed);
    } else if (filter === 'Incomplete') {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  }
}
