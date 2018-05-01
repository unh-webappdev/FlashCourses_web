/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 29, 2018
Path: /app/privacy/privacy.component.spec.ts
Privacy spec contain one or more expectations that test the state of the code. 
A spec whose expectations all succeed will be passing and a spec with any failures will fail.
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyComponent } from './privacy.component';

describe('PrivacyComponent', () => {
  let component: PrivacyComponent;
  let fixture: ComponentFixture<PrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
