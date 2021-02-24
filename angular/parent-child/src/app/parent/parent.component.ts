import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  nameOne: string = 'name one';
  ageOne: number = 45;
  nameTwo: string = 'name two';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.doSomething('jacob'), 3000);
  }

  doSomething(name: string): void {
    this.nameOne = name;
  }

  changeName(name: string): void {
    this.nameOne = name;
  }

  changeNameTwo(name: string): void {
    this.nameTwo = name;
  }

}
