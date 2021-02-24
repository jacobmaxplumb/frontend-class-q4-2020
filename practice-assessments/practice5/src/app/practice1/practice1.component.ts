import { Component, OnInit } from '@angular/core';
import { Name } from '../name';
import { UserPreferenceService } from '../user-preference.service';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  isDark: boolean = true;
  total: number = 0;
  names: Name[] = [
    {text: 'test 1', checked: false},
    {text: 'test 2', checked: true},
    {text: 'test 3', checked: false},
  ]

  constructor(private upService: UserPreferenceService) { }

  ngOnInit(): void {
    console.log(this.upService.getName());
    this.upService.setName('new name');
  }

  calcSumbitted(values: any): void {
    this.total = parseInt(values.number1) + parseInt(values.number2);
  }

}
