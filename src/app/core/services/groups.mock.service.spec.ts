import { TestBed, inject } from '@angular/core/testing';

import { GroupsMockService } from './groups.mock.service';

describe('GroupsMockService', () => {
  let groupsMockService: GroupsMockService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupsMockService]
    });
  });

  beforeEach(inject([GroupsMockService], service => {
    groupsMockService = service;
  }));

  it('should be created', () => {
    expect(groupsMockService).toBeTruthy();
  });

  describe('should resolve/reject group if available/unavailable', () => {
    it('should resolve group if available', () => {
      groupsMockService.getGroupDetails('20190214').then(data => {
        expect(data).toBeDefined();
        expect(data).toEqual({
          groupId: '20190214',
          startedDate: '2018/09/01',
          pigs: {
            total: 1345,
            age: '7 weeks old'
          }
        });
      });
    });

    it('should reject with proper error if not avialable', () => {
      groupsMockService.getGroupDetails('20190214').catch(error => {
        expect(error).toBeDefined();
        expect(error).toBe('No group found');
      });
    });
  });
});
