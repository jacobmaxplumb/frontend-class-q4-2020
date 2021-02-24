import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponentComponent } from './other-component/other-component.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './person/person.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'other', component: OtherComponentComponent},
  {path: 'people', component: PeopleListComponent},
  {path: 'people/:id', component: PersonComponent},
  {path: '', redirectTo: '/weather', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
