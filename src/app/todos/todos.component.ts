import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos;
  public todo;
  public text;
  public old;
  public editElement = 'default';
  public current: number = Date.now();
  public value;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    const newTodo = {
      text: this.text
    };
    this.todos.push(newTodo);
    this.todoService.addTodo(newTodo);
    this.text = '';
  }

  deleteTodo(todoText) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === todoText) {
        this.todos.splice(i, 1);
      }
    }

    this.todoService.deleteTodo(todoText);
  }

  editTodo(todo) {
    this.editElement = 'edit';
    this.old = todo.text;
    this.text = todo.text;
  }

  updateTodo() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === this.old) {
        this.todos[i].text = this.text;
      }
    }

    this.todoService.updateTodo(this.old, this.text);
    this.text = '';
  }

}
