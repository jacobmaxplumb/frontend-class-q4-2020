import { Component, OnInit } from '@angular/core';
import { UserPreferenceService } from '../user-preference.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  get name(): string {
    return this.userPreferenceService.getName();
  }

  // name: string = this.userPreferenceService.getName();

  constructor(private userPreferenceService: UserPreferenceService) { }

  ngOnInit(): void {
  }

  nameSubmitted(value: any) {
    this.userPreferenceService.setName(value.enteredName);
  }

}
