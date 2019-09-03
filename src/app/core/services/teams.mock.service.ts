import { HttpClient } from '@angular/common/http';

import { TeamsService } from '@farmera/core/contracts';
import { User } from '@farmera/core/models';

export class ApiResponse {
  public error?: { error: string };
}

export class TeamApiResponse extends ApiResponse {
  public results?: Array<User>;
}

export class TeamsMockService extends TeamsService {
  private readonly restUrl: string = 'https://randomuser.me';

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  public async getTeam(results: string): Promise<Array<User>> {
    const response = await this.httpClient
      .get<TeamApiResponse>(`${this.restUrl}/api`, {
        params: {
          results
        }
      })
      .toPromise();
    return response.results;
  }
}
