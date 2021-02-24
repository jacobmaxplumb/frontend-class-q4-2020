import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mad-lib';
  noun: string = null;
  todos: ToDo[] = [{isDone: false, title: 'something'}];
  adVerb: string = null;
  isSubmitted: boolean = false;
  myNumbers: string[] = ['one', 'two', 'three'];

  formSubmitted() {
    this.isSubmitted = true;
  }
}

interface ToDo {
  isDone: boolean;
  title: string;
}
