import { Group } from '@farmera/core/models';

export abstract class GroupsService {
  /**
   * Returns group details
   */
  public abstract getGroupDetails(groupId: string): Promise<Group>;
}
