import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actualTab = 'mainMenu';
  choiceTab(tab) {
    this.actualTab = tab;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAuLqZBsm20otS1wg1-W3SVafEESZ0sGR4',
      authDomain: 'angular-recipe-book-kcz.firebaseapp.com'
    });
  }
}
