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
  totalExpenses = [];
  allCategories = [];
  catWiseExpense;
  isSaveExpenses : Boolean = false;
  chooseCategory : Boolean = false;
  createCategory : Boolean = false;
  totalBudget = 0;
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
    let allExpenses = localStorage.getItem('totalExpenses');
    let categories = localStorage.getItem('categories');
    this.totalBudget = JSON.parse(localStorage.getItem('totalBudget')) || 0;
    if(allExpenses !== null) {
      this.totalExpenses = this.totalExpenses.concat(JSON.parse(localStorage.getItem('totalExpenses')));
      this.totalExpensesAmount = this.getExpensesSum(this.totalExpenses, 'amount');
    }
    if(categories !== null) {
      this.allCategories = this.allCategories.concat(JSON.parse(localStorage.getItem('categories')));
    }
  }
  getExpensesSum(arrayData, key) {
    return arrayData.reduce((acc, idx) => {
      return acc + idx[key];
    }, 0);
  }
  getForm() {
    this.isSaveExpenses = true;
  }
  saveFormData() {
    this.formData.value['createdDate'] = this.datePipe.transform(Date.now(), "dd/MM/yyyy, h:mm:ss a")
    this.totalExpenses.unshift(this.formData.value);
    this.allCategories.unshift(this.formData.value['category']);
    this.allCategories = _.uniq(this.allCategories);
    localStorage.setItem('totalExpenses', JSON.stringify(this.totalExpenses));
    localStorage.setItem('categories', JSON.stringify(this.allCategories));
    this.formData.reset();
    this.isSaveExpenses = false;
  }
  CancelForm() {
    this.isSaveExpenses = false;
  }
  deleteItem(index) {
    this.totalExpenses.some((expense, idx) => {
      if(index == idx){
        expense.isDeleted = !expense.isDeleted;
        return true;
      }
    });
    localStorage.setItem('totalExpenses', JSON.stringify(this.totalExpenses));
  }

}
