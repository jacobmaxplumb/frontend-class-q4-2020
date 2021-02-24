import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {

  private name: string = 'name';

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }


  constructor() { }
}
