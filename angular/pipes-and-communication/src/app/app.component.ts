import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: string[] = ['one', 'two', 'three'];
  listItemInput = null;

  addListItem() {
    this.list.push(this.listItemInput);
  }
}
