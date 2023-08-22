import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  showCompleted: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    // Fetch all todos from the service
    this.todos = this.todoService.getTodos();
  }

  toggleCompleted(): void {
    // Toggle the showCompleted flag
    this.showCompleted = !this.showCompleted;
    // Filter todos based on the showCompleted flag
    this.todos = this.showCompleted ? this.todos.filter(todo => todo.completed) : this.todos.filter(todo => !todo.completed);
  }

  // Implement any other additional logic you need for this component.
}
