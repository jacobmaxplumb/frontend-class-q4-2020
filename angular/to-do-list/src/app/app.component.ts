import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  link = 'https://google.com';
  inputValue = 50;

  logHello() {
    console.log('hello');
  }
}
