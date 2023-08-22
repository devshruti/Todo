// todo-item/todo-item.component.ts

import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
//   styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
    @Input() todo: Todo = {} as Todo;


  constructor(private todoService: TodoService) {}

  markCompleted() {
    // Call a method in TodoService to mark the todo as completed
    this.todoService.markTodoAsCompleted(this.todo.id);
    // this.todo.completed = !this.todo.completed;
    this.todo.status = this.todo.completed ? 'Completed' :  'Pending' ;
  }

  deleteTodo() {
    // Call a method in TodoService to delete the todo
    this.todoService.deleteTodo(this.todo.id);
  }
}
