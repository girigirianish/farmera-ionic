import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CoreModule } from '@farmera/core';
import { GroupsService, TeamsService } from '@farmera/core/contracts';
import { Group } from '@farmera/core/models';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let debugElement;

  let groupsService: GroupsService;
  let teamsService: TeamsService;

  const mockedGroupsData: Array<Group> = [
    {
      groupId: '20190214',
      startedDate: '2018/09/01',
      pigs: {
        total: 1345,
        age: '8 weeks old'
      }
    }
  ];

  const mockedUserData = [
    {
      name: {
        title: 'mockTitle',
        first: 'mockFirstName',
        last: 'mockLastName'
      },
      picture: {
        large: 'largemockimage',
        medium: 'mediummockimage',
        thumbnail: 'thumnailmockimage'
      }
    },
    {
      name: {
        title: 'mockTitle1',
        first: 'mockFirstName1',
        last: 'mockLastName1'
      },
      picture: {
        large: 'largemockimage1',
        medium: 'mediummockimage1',
        thumbnail: 'thumnailmockimage1'
      }
    },
    {
      name: {
        title: 'mockTitle2',
        first: 'mockFirstName2',
        last: 'mockLastName2'
      },
      picture: {
        large: 'largemockimage2',
        medium: 'mediummockimage2',
        thumbnail: 'thumnailmockimage2'
      }
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), CoreModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    groupsService = debugElement.injector.get(GroupsService);
    teamsService = debugElement.injector.get(TeamsService);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On component initialization if service call goes right', () => {
    beforeEach(async(() => {
      // lets clean it up first
      component.group = undefined;
      component.team = [];
      component.teamCardTitle = undefined;

      spyOn(groupsService, 'getGroupDetails').and.returnValue(
        Promise.resolve(mockedGroupsData[0])
      );

      spyOn(teamsService, 'getTeam').and.returnValue(
        Promise.resolve(mockedUserData)
      );
      fixture.detectChanges();
    }));

    it('should load group details', () => {
      expect(component.group).toBeUndefined();
      component.ngOnInit();
      groupsService.getGroupDetails('mockGroupId').then(_ => {
        expect(component.group).toBeDefined();
        expect(component.group).toEqual(mockedGroupsData[0]);
      });
    });

    it('should load and map team and set team card title', () => {
      expect(component.team.length).toBe(0);
      expect(component.teamCardTitle).toBeUndefined();
      component.ngOnInit();
      teamsService.getTeam('3').then(_ => {
        expect(component.team.length).toBe(3);
        expect(component.teamCardTitle).toBeDefined();
        expect(component.teamCardTitle).toBe('TEAM ( 3 )');
      });
    });
  });

  describe('On component initialization if service call goes haywire', () => {
    beforeEach(async(() => {
      // lets clean it up first
      component.group = undefined;
      component.team = [];
      component.teamCardTitle = undefined;

      spyOn(groupsService, 'getGroupDetails').and.callFake(() =>
        Promise.reject('Error Fetching group details.')
      );

      spyOn(teamsService, 'getTeam').and.callFake(() =>
        Promise.reject('Error fetching team details.')
      );

      console.error = jasmine.createSpy('error');

      fixture.detectChanges();
    }));

    it('should elegantly log error provided by service in error format: Group Details load fails', () => {
      expect(component.group).toBeUndefined();
      component.ngOnInit();
      groupsService.getGroupDetails('mockGroupId').catch(_ => {
        expect(component.group).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith(
          'Error Fetching group details.',
          'Something went wrong while fetching group !!'
        );
      });
    });

    it('should elegantly log error provided by service in error format: Team load fails', () => {
      expect(component.team.length).toBe(0);
      expect(component.teamCardTitle).toBeUndefined();
      component.ngOnInit();
      teamsService.getTeam('3').catch(_ => {
        expect(component.team.length).toBe(0);
        expect(component.teamCardTitle).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith(
          'Error fetching team details.',
          'Something went wrong while fetching team !!'
        );
      });
    });
  });
});
