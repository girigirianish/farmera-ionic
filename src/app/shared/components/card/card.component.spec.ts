import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CollapsibleCardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Toggle Collapsible', () => {
    it('should set collapsed to false if its true', () => {
      component.collapsed = true;
      component.toggle();
      expect(component.collapsed).toBeFalsy();
    });
    it('should set collapsed to true if its false', () => {
      component.collapsed = false;
      component.toggle();
      expect(component.collapsed).toBeTruthy();
    });
  });
});
