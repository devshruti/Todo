// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
// Import RouterModule and Routes

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

// Define the routes
const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'create', component: CreateTodoComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [AppComponent, TodoListComponent, CreateTodoComponent, TodoItemComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)], // Add RouterModule with the configured routes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
