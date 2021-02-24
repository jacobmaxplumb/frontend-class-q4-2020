import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  people: any[] = [
    {id: 1, firstName: 'jacob'},
    {id: 2, firstName: 'james'},
  ]

  weather: Weather ={
    temp: 0,
    main: '',
    windSpeed: 0,
    description: '',
    city: ''
  }

  apiUrl: string = 'http://api.openweathermap.org/data/2.5/weather?appId=aa2aefc95ab3fbbaaf699eea4a115eaf&q='

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${city}`)
  }
}
