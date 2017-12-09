import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { ListComponent } from './list/list.component';
import { TodoService } from './todo.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
