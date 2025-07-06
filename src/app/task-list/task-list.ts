import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskList {
  private taskService = inject(TaskService);

  tasks: Task[] = this.taskService.getTasks();
  newTaskTitle = '';
  newTaskDescription = '';

  addTask() {
    const title = this.newTaskTitle.trim();
    const description = this.newTaskDescription.trim();

    if (!title) return;

    const isDuplicate = this.tasks.some(task => task.title === title);
    if (isDuplicate) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status: false,
    };

    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTasks();
    this.newTaskTitle = '';
    this.newTaskDescription = '';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
