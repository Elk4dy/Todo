import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoService } from './todo.service';
import { CategoryService } from './category.service';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    TodoService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
