import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: string[] = ['person one', 'person two', 'asdlkfjasld', 'laskdfjlk']

  constructor() { }
}
