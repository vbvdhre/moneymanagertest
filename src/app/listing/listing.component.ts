import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  formData;
  //array of objects of expense items
  // each objct includes amount, category, item & isDeleted - stored in localstorage
  totalExpenses = [];
  // all categories stored in array - stored in localstorage
  allCategories = [];
  // overall Total Budget -stored in localstorage
  totalBudget = 0;
  catWiseExpense;
  // flags to hide/show form,buttons
  isSaveExpenses : Boolean = false;
  chooseCategory : Boolean = false;
  createCategory : Boolean = false;
  amount;
  category;
  item;
  totalExpensesAmount = 0;
  constructor(private modalService : NgbModal, private datePipe : DatePipe) {
    this.formData = new FormGroup({
      amount : new FormControl(this.amount, [Validators.required]),
      category : new FormControl(this.category),
      item : new FormControl(this.item, [Validators.required])
    })
  }

  ngOnInit() {
    // get all the data from localstorage i,e-
    // totalExpenses- Array of expense items
    // categories- all Categories
    // totalBudget - budget
    let allExpenses = localStorage.getItem('totalExpenses');
    let categories = localStorage.getItem('categories');
    this.totalBudget = JSON.parse(localStorage.getItem('totalBudget')) || 0;

    // if localStorage totalExpenses is null i,e at the start then totalExpenses is explicitely declared as empty
    // and then push the new item into it and save it to localstorage
    // if localstorage is not null then concat the localstorage data and the current scoped totalExpenses variable.
    // Same implies for Categories
    if(allExpenses !== null) {
      this.totalExpenses = this.totalExpenses.concat(JSON.parse(localStorage.getItem('totalExpenses')));
      // this.totalExpensesAmount = this.getExpensesSum(this.totalExpenses, 'amount');
      this.calculateTotalExpenses();
    }
    if(categories !== null) {
      this.allCategories = this.allCategories.concat(JSON.parse(localStorage.getItem('categories')));
    }
  }

  // common function to get the sum of values of objects in the array.
  // parameters required -
  // arrayData - Given Array
  // Key - object Key which sum is required
  getExpensesSum(arrayData, key) {
    return arrayData.reduce((acc, idx) => {
      return acc + idx[key];
    }, 0);
  }
  // this function calculate the total sum of nonDeleted items i,e actual expense amount
// and store it localstorage
  calculateTotalExpenses() {
    this.totalExpensesAmount = this.getExpensesSum(this.totalExpenses.filter((i) => {
      return !i.isDeleted;
    }), 'amount');
    localStorage.setItem('totalExpensesAmount', JSON.stringify(this.totalExpensesAmount));
  }
  // this flag unables the Expense Form on Click of Create Expense button
  getForm() {
    this.isSaveExpenses = true;
  }
  // this function takes the form data i,e expense line item data and stores
  // it into the localstorage
  saveFormData() {
  // the current time and date is taken into consideration while creating Each expense.
    this.formData.value['createdDate'] = this.datePipe.transform(Date.now(), "dd/MM/yyyy, h:mm:ss a");
    this.totalExpenses.unshift(this.formData.value);
    this.allCategories.unshift(this.formData.value['category']);
    // store the unique categories
    this.allCategories = _.uniq(this.allCategories);
    localStorage.setItem('totalExpenses', JSON.stringify(this.totalExpenses));
    localStorage.setItem('categories', JSON.stringify(this.allCategories));
    this.calculateTotalExpenses();
    this.formData.reset();
    this.isSaveExpenses = false;
    this.chooseCategory = false;
    this.createCategory = false;
  }
  // this flag disables the Expense Form on Click of Cancel button
  CancelForm() {
    this.isSaveExpenses = false;
  }
  // on click of delete/undo button isDeleted flag true/false is attached to each item respectively
  deleteItem(index) {
    this.totalExpenses.some((expense, idx) => {
      if(index == idx){
        expense.isDeleted = !expense.isDeleted;
        return true;
      }
    });
    this.calculateTotalExpenses();
  }
}
