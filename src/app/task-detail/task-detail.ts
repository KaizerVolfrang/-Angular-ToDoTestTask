import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="task">
      <h2>{{ task.title }}</h2>
      <p><strong>Описание:</strong> {{ task.description || '—' }}</p>
      <p><strong>Статус:</strong> {{ task.status ? 'Выполнена' : 'Не выполнена' }}</p>
      <button (click)="goBack()">Назад</button>
    </div>
    <div *ngIf="!task">
      <p>Задача не найдена</p>
      <button (click)="goBack()">Назад</button>
    </div>
  `
})
export class TaskDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private taskService = inject(TaskService);

  taskId = Number(this.route.snapshot.paramMap.get('id'));
  task = this.taskService.getTaskById(this.taskId);

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
