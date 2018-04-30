/*
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/flashcards/flashcards.component.spec.ts
Flashcards Component spec contain one or more expectations that test the state of the code.
A spec whose expectations all succeed will be passing and a spec with any failures will fail.
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardsComponent } from './flashcards.component';

describe('FlashcardsComponent', () => {
  let component: FlashcardsComponent;
  let fixture: ComponentFixture<FlashcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
