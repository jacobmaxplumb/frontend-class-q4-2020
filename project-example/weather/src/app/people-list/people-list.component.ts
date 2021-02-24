import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  get people(): any[] {
    return this.service.people;
  }

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
  }

}
