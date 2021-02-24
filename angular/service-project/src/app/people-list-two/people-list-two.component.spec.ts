import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListTwoComponent } from './people-list-two.component';

describe('PeopleListTwoComponent', () => {
  let component: PeopleListTwoComponent;
  let fixture: ComponentFixture<PeopleListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
