# Test MoneyManager

This project is developed for testing purpose and not commercially used anywhere. The purpose of MoneyManager Application is to maintain and track the records of day to day expenses.The current phase of application focus on creating your own budget and spend accordingly.You can see the expenses categorywise and also the total expense. MoneyManager application is desktop application and used in browser only(Google chrome/ Firefox).

## Production server
You can access MoneyManager application using the url-
`http://moneymanagertest.s3-website.ap-south-1.amazonaws.com/`

## Development server

To run this project locally, first take the clone from github repository on your develpment system. Following are the commands to run this project locally.
`git clone https://github.com/vbvdhre/moneymanagertest.git`
`cd moneymanagertest`
`npm install`
`ng serve`

After executing the above commands in terminal(for ubuntu), Application will get open in the browser automatically on the localhost server at port 4200 or you can access using the url http://localhost:4200.
* Prerequisites:
Make sure the system has preinstalled Node.js version grater than v8.9.4 ,Node package Manager and GIT.

## Description
#Homepage
On the home page of application, you can create, modify and delete expenses.Also you can see the Total Budget, Expenses Amount, and Remaining Amount.
First three tabs shows all the data(expenses), category wise data using Pie chart and Graph chart about your expenses. Bellow the tabs section comes the listing section. In the Listing you can see the individual expense created by you.
You can create the individual expense(`Expense Item`) by following steps:
1. Click on `Add Expense` button. The expense form will appear on which you need to mention `Amount`, `Category` and `item` responsible for the expense.
2. Fill the `Amount` that you have spent for the expenditure or the activity that you want to enter and save as a record.
3. Create Category:
To create Category you have two option
  a. `Choose existing category` from the Dropdown list.
  b. `Create new category`. You can also create new expense
  category from the setting Page and see all the Categories on the same.
  Note*- You can select only one Category for each Expense Item
4. Create `Item` that is responsible for you expenditure.
5. Click on `Save` button to save the current expense item.
6. You can also cancel the current expense on clicking `Cancel` button.

See all the expenses created by you on the listing section in tabular format.As soon as you created a new Expense item you will see that new item on the top of the list. You can see the Amount, Category, Item & Time of each expense line item. In action column you can `Delete`, the individual expense on clicking `Delete` button. Also you can undo deleted action by clicking `Undo` button.

#Setting Page
Decide your Budget
  You can create or edit your own budget for a time being. We keep the track of your total Budget and expense and the Remaining amount.
  When you enter settng page bydefault the input field for Budget is disabled or view centric only. If you want to enter the new budget or update the old budget aount then click on `Edit` button and after that click on `Save` button.
Split your expenses using Category
  It is better to track your expenses categorywise rather than whole. You can create your own category by entering category name in Category field and the click on `Save` button.
  All the categories that you have created so far, will be displayed on the listing section on the same page.  

## Techinical Requirements
MoneyManager Application is built on the Angular framework( Stable version- 6)
and the ui-library using Bootstrap, ng2-chart, Chart.js.
It has following characterastics-
1. Use of Reactive and Modular Forms.
2. Used client side Storage i,e LocalStorage for storing the Application data.
3. Managable, optimized, performance oriented code written in HTML, CSS, JavaScrip, Typescript
4. Managed application in Moudlar pattern.
5. Deployed using AWS S3 static web hosting.

To build application the Angular modules `BrowserModule,
AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule` are used. While for Date transaformation Angular Pipe i,e `DatePipe` is used.
Third party libraries required for building project other than angular core-packages,ui-libraries and dependancies are follows.
1. `chart.js, ng2-charts` - To implement charts.
2. `Lodash` - To manage and to perform, performance centric data structure operation.

## Upcoming features in the next phases of application
We know, no application is perfect, there is always a room for perfection. Still the important
 features are yet to come and is under development.
1. Pie chart for Expense vs Budget Chart, Pie and Bar charts for Categorical splitting of Expenses.
2. Create and manage your Income.
3. New category i,e Saving will be introduced and will assist you regarding the saving based on your past expenses.
4. Filters and Pagination for expense listing.
5. Use of Rxjs for state management.
6. Responsive application for desktop, mobiles and Tabs.
