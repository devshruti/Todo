// create-todo/create-todo.component.ts

import { Component } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoService } from '../shared/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
//   styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  title: string = ''; // Property to store the title input
  description: string = ''; // Property to store the description input

  constructor(private todoService: TodoService, private router: Router) {}

  createTodo() {
    // Create a new todo using the input values
    const newTodo: Todo = {
      id: 0, // The ID will be generated by the TodoService
      title: this.title,
      description: this.description,
      completed: false,
      status: "Pending"
    };

    // Call the createTodo method in TodoService to add the new todo
    this.todoService.createTodo(newTodo);

    // Reset the form fields after creating the todo
    this.title = '';
    this.description = '';
    this.router.navigate(['/todos']);
  }
}
