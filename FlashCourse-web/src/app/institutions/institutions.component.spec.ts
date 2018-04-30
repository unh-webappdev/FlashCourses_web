/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/institutions/institutions.component.spec.ts
Institutions Component spec contain one or more expectations that test the state of the code.
A spec whose expectations all succeed will be passing and a spec with any failures will fail.
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InstitutionsComponent } from './institutions.component';

describe('InstitutionsComponent', () => {
  let component: InstitutionsComponent;
  let fixture: ComponentFixture<InstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
