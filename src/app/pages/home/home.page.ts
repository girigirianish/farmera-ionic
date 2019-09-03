import { Component, OnInit } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

import { GroupsService, TeamsService } from '@farmera/core/contracts';
import { Group, User } from '@farmera/core/models';

export type UserViewModel = User & {
  userImageSafeStyle?: SafeStyle;
  fullName?: string;
  lastCheckIn?: string;
};

@Component({
  selector: 'farmera-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public group: Group;
  public team: Array<UserViewModel> = [];
  public teamCardTitle: string = null;

  private readonly mockGroupId: string = '20190214';
  private readonly noOfUserInTeam: string = '3';

  constructor(
    private readonly groupsService: GroupsService,
    private readonly teamsService: TeamsService,
    private readonly domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loadGroupDetails();
    this.loadTeam();
  }

  private async loadGroupDetails(): Promise<void> {
    try {
      this.group = await this.groupsService.getGroupDetails(this.mockGroupId);
    } catch (error) {
      console.error(error, 'Something went wrong while fetching group !!');
    }
  }

  private async loadTeam(): Promise<void> {
    try {
      const team = await this.teamsService.getTeam(this.noOfUserInTeam);
      this.team = this.mapUserViewModel(team);
      this.teamCardTitle = `TEAM ( ${this.team.length} )`;
    } catch (error) {
      console.error(error, 'Something went wrong while fetching team !!');
    }
  }

  private mapUserViewModel(teams: Array<UserViewModel>): Array<UserViewModel> {
    return teams.map(user => {
      user.userImageSafeStyle = this.domSanitizer.bypassSecurityTrustStyle(
        `url(${user.picture.thumbnail})`
      );
      user.fullName = this.getFullUserName(user.name.first, user.name.last);
      user.lastCheckIn = `last check in: ${this.randomDate(2, 8, 2)
        .getHours()
        .toString()} hrs ago`;
      return user;
    });
  }

  private getFullUserName(firstName: string, lastName: string): string {
    return [firstName, lastName].join(' ');
  }

  private randomDate(
    rangeOfDays: number,
    startHour: number,
    hourRange: number
  ): Date {
    const today = new Date(Date.now());
    return new Date(
      today.getFullYear() + 1900,
      today.getMonth(),
      today.getDate() + Math.random() * rangeOfDays,
      Math.random() * hourRange + startHour,
      Math.random() * 60
    );
  }
}
