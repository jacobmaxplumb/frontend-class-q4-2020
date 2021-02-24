import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: string[] = ['name1', 'name2', 'name3'];
  person: string = 'name1';

  constructor() { }

  ngOnInit(): void {
  }

  changePerson(e: any) {
    this.person = e;
  }

}
