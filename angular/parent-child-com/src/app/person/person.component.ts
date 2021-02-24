import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: string = '';
  personValue: string = '';
  @Output() personChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.personValue = this.person;
  }

  changeName() {
    this.personChanged.emit(this.personValue);
  }

}
