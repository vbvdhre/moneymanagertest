import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
totalBudget = 0;
category=" ";
showBudget = false;
allCategories = [];

  constructor() { }

  ngOnInit() {
    let categories = localStorage.getItem('categories');
    if(categories !== null) {
      this.allCategories = this.allCategories.concat(JSON.parse(localStorage.getItem('categories')));
    }

  }
  saveBudget() {
    console.log('this.totalBudget', this.totalBudget)
    localStorage.setItem('totalBudget', JSON.stringify(this.totalBudget));
    this.showBudget = false;
  }
  saveCategory() {
    this.allCategories.push(this.category);
    this.allCategories = _.uniq(this.allCategories);
    localStorage.setItem('categories', JSON.stringify(this.allCategories));
  }

}
