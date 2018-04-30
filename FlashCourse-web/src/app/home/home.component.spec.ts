/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/home/home.component.spec.ts
Home Component spec contain one or more expectations that test the state of the code.
A spec whose expectations all succeed will be passing and a spec with any failures will fail.
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
