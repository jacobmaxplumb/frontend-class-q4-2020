import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private weatherService: WeatherService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(x => {
      const id = parseInt(x.id);
      this.person =  this.weatherService.people.find(p => p.id === id);
    })
  }

}
