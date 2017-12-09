import { Injectable } from '@angular/core';
import { CheckCategories } from './check-categories';

@Injectable()
export class CategoryService extends CheckCategories {

  constructor() {
    super();
    this.loadCategory();
  }

  getCategories() {
    const categories = JSON.parse(localStorage.getItem('categories'));
    console.log(categories);
    return categories;
  }
}
