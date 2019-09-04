import { User } from '@farmera/core/models';

export abstract class TeamsService {
  /**
   * Returns a team
   */
  public abstract async getTeam(result: string): Promise<Array<User>>;
}
