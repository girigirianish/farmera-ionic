import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActionSheetController } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement;

  let router: Router;

  let actionSheetController: ActionSheetController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    actionSheetController = debugElement.injector.get(ActionSheetController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Manage Pigs Actions Sheet', () => {
    beforeEach(() => {
      spyOn(actionSheetController, 'create').and.callThrough();
    });

    it('should call create method for creating action sheet', () => {
      component.openManagePigsActionSheet();
      expect(actionSheetController.create).toHaveBeenCalled();
    });

    //TODO Find a way to test handeler as well !!
  });

  describe('Redirect to LOGBOOK page', () => {
    it('should redirect to LOGBOOK page', () => {
      const navigateSpy = spyOn(router, 'navigate');
      component.ridrectToLogBookPage();
      expect(navigateSpy).toHaveBeenCalledWith(['log-book']);
    });
  });
});
