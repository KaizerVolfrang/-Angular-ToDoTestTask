import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskDetail } from './task-detail/task-detail'; 

export const routes: Routes = [
  { path: 'tasks', component: TaskList },
  { path: 'tasks/:id', component: TaskDetail }, 
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];
