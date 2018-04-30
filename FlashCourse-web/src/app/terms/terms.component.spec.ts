/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/terms/terms.component.spec.ts
Terms Component spec contain one or more expectations that test the state of the code.
A spec whose expectations all succeed will be passing and a spec with any failures will fail.
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsComponent } from './terms.component';

describe('TermsComponent', () => {
  let component: TermsComponent;
  let fixture: ComponentFixture<TermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
