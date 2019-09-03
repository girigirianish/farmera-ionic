import { GroupsService } from '@farmera/core/contracts';
import { Group } from '@farmera/core/models';

export class GroupsMockService extends GroupsService {
  private readonly mockedGroupsData: Array<Group> = [
    {
      groupId: '20190214',
      startedDate: '2018/09/01',
      pigs: {
        total: 1345,
        age: '7 weeks old'
      }
    }
  ];

  public getGroupDetails(groupId: string): Promise<Group> {
    return new Promise((resolve, reject) => {
      const group = this.mockedGroupsData.find(
        group => group.groupId === groupId
      );
      group ? resolve(group) : reject('No group found');
    });
  }
}
