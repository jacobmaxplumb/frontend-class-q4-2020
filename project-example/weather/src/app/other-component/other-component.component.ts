import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/models/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.css']
})
export class OtherComponentComponent implements OnInit {

  get weather(): Weather {
    return this.weatherService.weather;
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
