/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/contact/contact.component.spec.ts
Contact Component spec contain one or more expectations that test the state of the code. 
A spec whose expectations all succeed will be passing and a spec with any failures will fail.
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
