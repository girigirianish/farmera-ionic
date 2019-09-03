import { User } from '@farmera/core/models';

export abstract class TeamsService {
  /**
   * Returns group details
   */
  public abstract async getTeam(result: string): Promise<Array<User>>;
}
