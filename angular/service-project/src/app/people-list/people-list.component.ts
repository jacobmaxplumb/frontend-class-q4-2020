import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  get people() { // ['person one', 'person two', 'asdlkfjasld']
    return this.peopleService.people;
  }

  personValue: string = '';

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    console.log(this.peopleService.people);
  }

  submitPerson() {
    this.peopleService.people.push(this.personValue);
  }

}
