import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list-two',
  templateUrl: './people-list-two.component.html',
  styleUrls: ['./people-list-two.component.css']
})
export class PeopleListTwoComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  get people() { // ['person one', 'person two', asdlkfjasld']
    return this.peopleService.people;
  }

  ngOnInit(): void {
    console.log(this.peopleService.people)
  }

}
