import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';
  actualTab = 'mainMenu';
  choiceTab(tab) {
    console.log(tab);
    this.actualTab = tab;
  }
}
