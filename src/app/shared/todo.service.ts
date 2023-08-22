// shared/todo.service.ts

import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  // Method to retrieve the list of todos
  getTodos(): Todo[] {
    return this.todos;
  }

  markTodoAsCompleted(todoId: number): void {
    const todoIndex = this.todos.findIndex((t) => t.id === todoId);

    if (todoIndex !== -1) {
      // Set the 'completed' property to true for the found todo
      this.todos[todoIndex].completed = true;
    }
  }
  
  // Method to create a new todo
  createTodo(newTodo: Todo): void {
    // Generate a unique ID (you can use a library like uuid or increment an ID counter)
    const newId = this.generateUniqueId();

    // Assign the new ID to the todo
    newTodo.id = newId;
    // newTodo.status= "Pending"
    // Push the new todo to the todos array
    this.todos.push(newTodo);
  }

  // Method to update a todo
  updateTodo(updatedTodo: Todo): void {
    const existingTodoIndex = this.todos.findIndex((t) => t.id === updatedTodo.id);

    if (existingTodoIndex !== -1) {
      // Replace the existing todo with the updated todo
      this.todos[existingTodoIndex] = updatedTodo;
    }
  }

  // Method to delete a todo
  deleteTodo(todoId: number): void {
    // Create a new array without the todo to be deleted const index = this.todos.findIndex((t) => t.id === id);
    const index = this.todos.findIndex((t) => t.id === todoId);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  private generateUniqueId(): number {
    // Implement your unique ID generation logic here.
    // This is a simple example using a timestamp, but you can use a more robust method.
    
    const timestamp = new Date().getTime(); // Get the current timestamp
    const random = Math.floor(Math.random() * 1000); // Generate a random number
    
    // Concatenate the timestamp and random number to create a unique ID
    const uniqueId = Number(`${timestamp}${random}`);
    
    return uniqueId;
  }
  
}
