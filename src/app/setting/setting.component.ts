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
    // get all the categories from the localstorage
    let categories = localStorage.getItem('categories');
    if(categories !== null) {
      this.allCategories = this.allCategories.concat(JSON.parse(localStorage.getItem('categories')));
    }

  }
  // save or edit the Total Budget
  saveBudget() {
    localStorage.setItem('totalBudget', JSON.stringify(this.totalBudget));
    this.showBudget = false;
  }
  // Save the entered category and store it in the localstorage
  saveCategory() {
    this.allCategories.push(this.category);
    this.allCategories = _.uniq(this.allCategories);
    localStorage.setItem('categories', JSON.stringify(this.allCategories));
  }

}
