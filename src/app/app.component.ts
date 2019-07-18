import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mm';
  collapsed = true;
  // this function is used to Toggle navbar on mobile application
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
}
