import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public categories;
  public text;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    // this.categories = [
    //   {
    //     text: 'Animals'
    //   },
    //   {
    //     text: 'Heroes'
    //   }
    // ];
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }

  addCategory() {
    this.categories.push({
      text: this.text
    });
  }

  deleteCategory(categoryText) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].text === categoryText) {
        this.categories.splice(i, 1);
      }
    }
  }
}
