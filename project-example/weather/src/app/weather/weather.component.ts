import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/models/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  get weather(): Weather {
    return this.weatherService.weather;
  }

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('detroit').subscribe((data: any) => {
      this.setWeather(data);
    })
  }

  searchCity(city: string) {
    this.weatherService.getWeather(city).subscribe((blah: any) => {
      this.setWeather(blah);
    })
  }

  setWeather(data: any) {
    this.weatherService.weather.temp = this.kToF(data.main.temp);
    this.weatherService.weather.main = data.weather[0].main;
    this.weatherService.weather.description = data.weather[0].description;
    this.weatherService.weather.windSpeed = data.wind.speed;
    this.weatherService.weather.city = data.name;
  }

  kToF(k: number): number {
    return ((9/5) * (k - 273) + 32);
  }

}
