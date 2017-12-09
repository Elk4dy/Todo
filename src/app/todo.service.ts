import { Injectable } from '@angular/core';
import { CheckTodos } from './check-todos';

@Injectable()
export class TodoService extends CheckTodos {

  constructor() {
    super();
    this.load();
   }

   getTodos() {
     const todos = JSON.parse(localStorage.getItem('todos'));
     return todos;
   }

   addTodo(newTodo) {
    const todos = JSON.parse(localStorage.getItem('todos'));

    // add new todo item

    todos.push(newTodo);

    // set new todo

    localStorage.setItem('todos', JSON.stringify(todos));
   }

   deleteTodo(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === todoText) {
        todos.splice(i, 1);
      }
    }

    // set new todo

    localStorage.setItem('todos', JSON.stringify(todos));
   }

   updateTodo(old, newText) {
    const todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === old) {
        todos[i].text = newText;
      }
    }

    // set new todo

    localStorage.setItem('todos', JSON.stringify(todos));
   }
}
