import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { TeamsMockService } from './teams.mock.service';

describe('TeamsMockService', () => {
  let teamsMockService: TeamsMockService;
  let httpMock: HttpTestingController;

  const mockedUserData = {
    results: [
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
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TeamsMockService]
    });
  });

  beforeEach(inject(
    [HttpTestingController, TeamsMockService],
    (httpMockController, service) => {
      teamsMockService = service;
      httpMock = httpMockController;
    }
  ));

  it('should be created', () => {
    expect(teamsMockService).toBeTruthy();
  });

  describe('getTeams', () => {
    it('should return an Promise<User[]>', () => {
      teamsMockService.getTeam('3').then(data => {
        expect(data.length).toBe(3);
        expect(data).toBe(mockedUserData.results);
      });

      const request = httpMock.expectOne(`https://randomuser.me/api?results=3`);

      expect(request.request.method).toBe('GET');

      request.flush(mockedUserData);

      httpMock.verify();
    });
  });
});
